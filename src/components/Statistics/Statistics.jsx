import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
          <ul className={css.listStatistics}>
          <li>
            <p className={css.statisticText}>
              Good<span>{good}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Neutral<span>{neutral}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Bad<span>{bad}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Total<span>{total}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Positive feedback
              <span>
                {positivePercentage}
                %
              </span>
            </p>
          </li>
        </ul>
    </>
  }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics