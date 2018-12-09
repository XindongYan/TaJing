import styles from './index.css';
import { Menu, Dropdown, Icon } from 'antd';
import { setTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';

export default function () {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="#">合作方式</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="#">关于我们</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>联系我们</Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.body}>

      {/** 视频块 */}
      <div className={styles.pos}>
        <video muted
          src="http://101.132.153.184:3000/movie.mp4"

          width="100%"
          autoplay="autoplay"
          height="100%"
        >
          your browser does not support the video tag
        </video>
      </div>

      {/** 文字块 */}
      <div>
        <h1 className={styles.h1}>塔鲸科技</h1>

        <h2 className={styles.span}>致力于研发钉钉企业应用</h2>

        <h1 className={styles.h}>大数据分析</h1>
        <h1 className={styles.h2}>企业OA</h1>
      </div>

      {/** emnu块 */}
      <Dropdown overlay={menu} className={styles.hover}>
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );
}
