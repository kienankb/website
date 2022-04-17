import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';
import * as React from 'react';

import {Day, DaySlice} from '../../components/datajournal/DayTile';

import styles from '../../components/styles/DataJournal.module.css';


const HowImDoing: NextPage = () => {
  const {readRemoteFile} = usePapaParse();
  const [days, setDays] = React.useState<Day[]>([]);

  const loadDayDataFromCSV = () => {
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
      complete: (results) => {
        const resultDays = results.data.map(day => day as Day);
        setDays(resultDays);
      },
    });
  };

  React.useEffect(loadDayDataFromCSV, []);

  return <>
    <div className={styles.sliceContainer}>
      {days.map(day => <DaySlice day={day} />)}
    </div>
    <header className={styles.headerContainer}>
      <h1>So...How Have You Been?</h1>
      <h2>a makeshift journal of {days.length} days and counting</h2>
    </header>
  </>;
}

export default HowImDoing