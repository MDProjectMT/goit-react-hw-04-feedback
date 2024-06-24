import styles from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.divbutton}>
    {options.map(option => (
      <button
        className={styles.button}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
