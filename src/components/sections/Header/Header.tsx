import styles from './Header.module.scss'
// import IconLogo from '@/components/icons/IconLogo'
import Link from 'next/link'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Theme } from '@/utils/types'

type Props = { theme?: Theme }

const Header: FC<Props> = () => {

  return (
    <div className={styles.root}>
      <div className="container">
          <div className="grid">
            <div className='span-12'>
              <header>
                <nav className={cn(styles.nav)}>
                  <div className='grid'>
                    <div className='span-4'>
                      <div className={styles.logo}>
                        <Link href="/">
                          HiKeys―1977
                        </Link>
                      </div>
                    </div>
                    <div className='span-4 start-9 d-flex items-center'>
                      <div className={styles.infoHeader}>
                        <p className={styles.copy}>Embracing the legacy of sound exquisitely designed for tomorrow. </p>
                        <Link className={styles.button} href='/'>Let me know</Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
