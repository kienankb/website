import type {NextPage} from 'next';
import {usePapaParse} from 'react-papaparse';
import moment from 'moment';
import * as React from 'react';
import Head from 'next/head';
import * as D3 from 'd3';

import {Day, DaySlice, DayGrid} from '../../components/datajournal/DayTile';

import styles from '../../components/styles/DataJournal.module.css';


const HowImDoing: NextPage = () => {
  const {readRemoteFile} = usePapaParse();
  const [days, setDays] = React.useState<Object[]>([]);

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
        // const resultDays = results.data.map(day => day as Day);
        // setDays(resultDays);
        setDays(results.data);
      },
    });
  };

  React.useEffect(loadDayDataFromCSV, [readRemoteFile]);

  const drawLine = () => {
    const xScale = D3.scaleTime()
      .domain(D3.extent(days, (day) => day.date.toDate()))
      .range([0, 1000]);
    const yScale = D3.scaleLinear()
      .domain([0, 5])
      .range([150, 0]);
    let lineMaker = D3.line()
      .x((d, i) => {
        const scaleVal = xScale(d.date);
        console.debug('x:', d.date.toDate(), scaleVal);
        return scaleVal;
      })
      .y(d => {
        const scaleVal = yScale(d.rating);
        console.debug('y:', d.rating, scaleVal);
        return scaleVal;
      })
      .curve(D3.curveBasis);
    return (
      <path
        className="line"
        d={lineMaker(days)}
        stroke="url(#linear)"
        strokeWidth="2px"
        fill="none"
      />
    );
  };

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
      <div className={styles.legend}>darker is a worse day, lighter is a better day; gray is missing data</div>
      <div className={styles.legend}>up above, from left to right, is the same data in a timeline.</div>
    </header>
    <svg
      viewBox="0 0 1000 150"
      width={"100%"}
      height={"150px"}
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="10%" stop-color="#EAAC8B"/>
          <stop offset="30%" stop-color="#E56B65"/>
          <stop offset="50%" stop-color="#B56576"/>
          <stop offset="70%" stop-color="#6D597A"/>
          <stop offset="90%" stop-color="#23364c"/>
        </linearGradient>
      </defs>
      {drawLine()}
    </svg>
  </>;
}

export default HowImDoing
