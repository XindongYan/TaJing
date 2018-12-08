import styles from './index.css';

export default function () {
  let data = 'preview.mp4'
  return (
    <div className={styles.body}>
      <div className={styles.pos}>
        <video muted
          src="http://101.132.153.184:3000/movie.mp4"
          
          width="100%"
          autoplay="autoplay"
          height="100%"
          // object-fit="cover"
          objectFit="fill"
        >
          your browser does not support the video tag
      </video>
      </div>

      <h1 className={styles.h1}>塔鲸科技</h1>

      <h2 className={styles.span}>致力于研发钉钉企业应用</h2>

      <h1 className={styles.h}>大数据分析</h1>
      <h1 className={styles.h2}>企业OA</h1>

    </div>
  );
}
