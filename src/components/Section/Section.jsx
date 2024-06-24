import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
