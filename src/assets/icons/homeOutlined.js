import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function HomeOutlined(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={23} height={23} rx={5} fill="#344B6E" />
      <Path
        d="M10.054 4.486L4.857 8.728c-.585.474-.96 1.475-.832 2.224l.997 6.084C5.202 18.12 6.222 19 7.302 19H15.7c1.072 0 2.1-.887 2.28-1.964l.997-6.084c.12-.749-.255-1.75-.833-2.224l-5.197-4.234c-.802-.657-2.1-.657-2.894-.008z"
        stroke="#ECEBEB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.38 16v-2.25"
        stroke="#ECEBEB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeOutlined