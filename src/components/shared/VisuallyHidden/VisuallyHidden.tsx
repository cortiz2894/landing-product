import { FC, JSXElementConstructor, CSSProperties, ReactNode } from 'react'

type Props = {
  as?: string | JSXElementConstructor<any>
  style?: CSSProperties
  children: ReactNode
}

const VisuallyHidden: FC<Props> = ({
  as: Component = 'span',
  style = {},
  ...rest
}) => (
  <Component
    style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 0,
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1,
      whiteSpace: 'nowrap',
      ...style
    }}
    {...rest}
  />
)

export default VisuallyHidden
