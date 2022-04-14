import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';
import * as React from 'react';

import styles from '../../components/styles/HowImDoing.module.css';


interface Day {
  date: moment.Moment;
  rating: number;
  create: boolean;
  care: boolean;
  talk: boolean;
  move: boolean;
  work: boolean;
  read: boolean;
  write: boolean;
};

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

  const ratingToColorMap = [
    "#999999",
    "#000000",
    "#FF0000",
    "#FFA500",
    "#00FF00",
    "#1E90FF"
  ];

  return <div className={styles.linearContainer}>
    {days.map(day => {
      return <div title={day.date.format("MM/DD/YYYY")} className={styles.linearDay} style={{backgroundColor: ratingToColorMap[day.rating]}}></div>
    })}
  </div>;
}

export default HowImDoing