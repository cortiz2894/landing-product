import Link from 'next/link'
import cn from 'clsx'
// import IconLogo from '@/components/icons/IconLogo'
import styles from './Footer.module.scss'
import { ArrowLink, VisuallyHidden } from '@/components/shared'

type Props = {
  isContact: boolean
  theme?: 'dark' | 'light'
}

const Footer = ({ isContact, theme = 'dark' }: Props) => (
  <div className={cn(styles.root, styles[theme])}>
    <div className="container">
      {!isContact && (
        <div className={styles.preFooter}>
          <div className="grid">
            <div className="span-12 span-sm-8 span-md-6">
              <h3>
                <span className="d-inline d-lg-block">
                  Let’s create something that makes you stand out, together.{' '}
                </span>
                <span className="d-inline d-lg-block">
                  Drop us a line to talk about your project.
                </span>
              </h3>
              <ArrowLink href="/contact" className={styles.bigButton}>
                Let’s Talk
              </ArrowLink>
            </div>
          </div>
        </div>
      )}
      <div className={cn(styles.bottomFooter, isContact && styles.contactFoot)}>
        <div className="grid">
          <div className={cn('span-2', styles.brandCopy)}>
            <Link href="/" className={styles.logo}>
              <VisuallyHidden>3D Landing</VisuallyHidden>
              {/* <IconLogo /> */}
            </Link>
            <span>All rights reserved ©{new Date().getFullYear()}</span>
          </div>
          <div
            className={cn(
              'span-8 span-md-2 start-1 start-md-4',
              styles.officeInfo
            )}
          >
            <span>Libertad 2529</span>
            <span>Office 102 </span>
            <span>Montevideo, Uruguay</span>
          </div>
          <div className={cn('span-4 span-md-2', styles.links, styles.policy)}>
            <Link className={styles.link} href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className={cn('span-4 span-md-1 start-md-10', styles.links)}>
            <ul>
              <li>
                <Link
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Dribbble
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className={cn('span-4 span-md-1', styles.links)}>
            <ul>
              <li>
                <Link className={styles.link} href="/#work">
                  Work
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className={cn('span-4 span-md-1', styles.links)}>
            <Link
              className={styles.link}
              href="/contact"
              target="_blank"
              rel="noreferrer"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
