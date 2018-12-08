// import styles from './index.css';
import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1></h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
