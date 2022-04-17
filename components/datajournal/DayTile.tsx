import styles from '../styles/DataJournal.module.css';

const ratingToColorMap = [
  "#999999",
  "#000000",
  "#FF0000",
  "#FFA500",
  "#00FF00",
  "#1E90FF"
];

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
    style={{backgroundColor: ratingToColorMap[day.rating]}}>
  </div>
}

type DayTileProps = {
  day: Day,
}

const DayTile = ({day}: DayTileProps) => {
  return <div className={styles.dayTile} style={{backgroundColor: ratingToColorMap[day.rating]}}></div>;
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
      tempMonthsDays = [];
    } else {
      tempMonthsDays.push(day);
    }
    currentMonth = day.date.month();
  });

  return <div>
    {daysByMonth.map(month => {
      return <div className={styles.gridMonthRow}>
        <span>{month[0].date.format("MMMM YYYY")}</span>
        {month.map(day => {
          return <span className={styles.gridMonthDay}>
            <DayTile day={day} />
          </span>
        })}
      </div>
    })}
  </div>;
}

export {DayTile, DaySlice, DayGrid};
export type {Day};