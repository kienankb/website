import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';


const HowImDoing: NextPage = () => {
  const {readRemoteFile} = usePapaParse();

  const handleReadRemoteFile = () => {
    readRemoteFile('/data/days.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      transform: (value, header) => {
          if (header === "date") {
              return moment(value, "MM/DD/YYYY");
          } else if (["create", "care", "talk", "move", "work", "read", "write"].includes(header)) {
              let toBool = {"0": false, "1": true, "null": null, "": null};
              return toBool[value];
          }
          return value;
      },
      complete: (results) => {console.debug(results)},
    });
  };

  return <button onClick={handleReadRemoteFile}>load data</button>;
}

export default HowImDoing