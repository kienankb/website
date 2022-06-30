import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';
import * as React from 'react';
import Head from 'next/head';

import {Day, DaySlice, DayGrid} from '../../components/datajournal/DayTile';

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

  React.useEffect(loadDayDataFromCSV, [readRemoteFile]);

  return <>
    <Head>
      <title>Data Journal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.sliceContainer}>
      {days.map(day => <DaySlice key={day.date.format()} day={day} />)}
    </div>
    <header className={styles.headerContainer}>
      <h1>How Have You Been?</h1>
      <h2>a makeshift journal of {days.length || "uhhhh"} days and counting</h2>
      <div className={styles.legend}>black = near-catatonic, red = bad, orange = okay, green = good, blue = great</div>
    </header>
    <DayGrid days={days} />
  </>;
}

export default HowImDoing