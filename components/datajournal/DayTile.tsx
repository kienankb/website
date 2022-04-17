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
    key={dateLabel}
    title={dateLabel}
    className={styles.daySlice}
    style={{backgroundColor: ratingToColorMap[day.rating]}}>
  </div>
}

type DayTileProps = {
  day: Day,
}

const DayTile = () => {

}

export {DayTile, DaySlice};
export type {Day};