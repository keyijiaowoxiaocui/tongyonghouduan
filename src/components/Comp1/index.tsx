// import './comp1.scss' //全局引用，不对
import styles from './comp1.module.scss'
import { Button } from 'antd'
import { StepBackwardOutlined } from '@ant-design/icons'
const Comp = () => {
  return (
    <div className={styles.box}>
      <Button type="primary">Primary Button</Button>
      <StepBackwardOutlined style={{ fontSize: '40px' }} />
      <p>这是Comp1里面的内容</p>
    </div>
  )
}

export default Comp
