import styles from './Notification.module.scss';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      {(message = 'There is no feedback')}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
