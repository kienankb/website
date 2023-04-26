import styles from '../styles/DataJournal.module.css';

const getColorFromRating = (rating: number) => {
  const ratingToColorMap = [
    "#999999",
    "#23364c",
    "#6D597A",
    "#B56576",
    "#E56B65",
    "#EAAC8B"
  ];

  return ratingToColorMap[rating] ?? ratingToColorMap[0];
}

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

type DaySliceProps = {
  day: Day,
}

const DaySlice = ({day}: DaySliceProps) => {
  const dateLabel = day.date.format("MM/DD/YYYY");
  return <div
    title={dateLabel}
    className={styles.daySlice}
    style={{backgroundColor: getColorFromRating(day.rating)}}>
  </div>
}

type DayTileProps = {
  day: Day,
}

const DayTile = ({day}: DayTileProps) => {
  return <div
    title={day.date.format("MM/DD/YYYY")}
    className={styles.dayTile}
    style={{backgroundColor: getColorFromRating(day.rating)}}
    ></div>;
}

type DayGridProps = {
  days: Day[],
}

const DayGrid = ({days}: DayGridProps) => {
  let daysByMonth: Day[][] = [];
  let tempMonthsDays: Day[] = [];
  let currentMonth = days[0]?.date.month();

  days.forEach((day) => {
    if (day.date.month() !== currentMonth) {
      daysByMonth.push(tempMonthsDays);
      tempMonthsDays = [day];
    } else {
      tempMonthsDays.push(day);
    }
    currentMonth = day.date.month();
  });
  // don't forget about the last month
  daysByMonth.push(tempMonthsDays);

  if (!days || !days.length) {
    return <div>loading...</div>
  }

  return <div>
    {daysByMonth.map(month => {
      return <div key={`${month[0].date.year()}-${month[0].date.month()}`} className={styles.gridMonthRow}>
        <span className={styles.gridMonthLabel}>{month[0].date.format("MM/YY")}</span>
        {month.map(day => {
          return <span
            key={day.date.date()}
            className={styles.gridMonthDay}
            style={{gridColumnStart: day.date.date()+1}}
          >
            <DayTile day={day} />
          </span>
        })}
      </div>
    })}
  </div>;
}

export {DayTile, DaySlice, DayGrid};
export type {Day};
