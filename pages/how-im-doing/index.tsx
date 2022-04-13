import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';


const HowImDoing: NextPage = () => {
  const {readRemoteFile} = usePapaParse();

  const handleReadRemoteFile = () => {
    readRemoteFile('/data/days-fixed.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      transform: (value, header) => {
          if (header === "date") {
              return moment(value, "MM/DD/YYYY");
          }
          return value;
      },
      complete: (results) => {console.debug(results)},
    });
  };

  return <button onClick={handleReadRemoteFile}>load data</button>;
}

export default HowImDoing