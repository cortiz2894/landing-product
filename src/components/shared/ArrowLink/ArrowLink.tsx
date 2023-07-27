import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import cn from 'clsx'
import styles from './ArrowLink.module.scss'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'normal' | 'block'
  target?: '_blank'
  rel?: string
} & (LinkProps | ButtonHTMLAttributes<HTMLButtonElement>)

const Arrow = ({ ...rest }) => {
  return (
    <svg
      width=".5em"
      height=".5em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.1573 18L15.1348 5.02247V17.5955L18 14.6966V0H3.33708L0.438203 2.89888H12.9775L0 15.8764L2.1573 18Z"
        fill="currentcolor"
      />
    </svg>
  )
}

const BlockLink: FC<Props> = ({
  children,
  className,
  variant = 'normal',
  ...rest
}) => {
  const { href } = rest as LinkProps

  if (href) {
    return (
      <Link
        {...(rest as LinkProps)}
        className={cn(styles.root, styles[variant], className)}
      >
        <Arrow data-arrow="1" />
        <span>{children}</span>
        <Arrow data-arrow="2" />
      </Link>
    )
  } else {
    return (
      <button
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        className={cn(styles.root, styles[variant], className)}
      >
        <Arrow data-arrow="1" />
        <span>{children}</span>
        <Arrow data-arrow="2" />
      </button>
    )
  }
}

export default BlockLink 
