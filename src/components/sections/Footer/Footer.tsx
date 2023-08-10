import Link from 'next/link'
import cn from 'clsx'
// import IconLogo from '@/components/icons/IconLogo'
import styles from './Footer.module.scss'
import { ArrowLink, VisuallyHidden } from '@/components/shared'

type Props = {
  theme?: 'dark' | 'light'
}

const Footer = ({ theme = 'dark' }: Props) => (
  <div className={cn(styles.root, styles[theme])}>
    <div className="container">
      <div className='grid'>
        <div className='span-12'>

        </div>
      </div>
    </div>
  </div>
)

export default Footer
