import css from './Statistics.module.css'


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positive = 0,
}) => {

    return (
    <ul className={css.staticticList}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positive} %</li>   
    </ul>
     );

}
