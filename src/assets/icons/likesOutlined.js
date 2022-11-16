import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LikeOutlined(props) {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={23} height={22} rx={5} fill="#344B6E" />
      <Path
        d="M11.965 17.93a1.562 1.562 0 01-.93 0C8.86 17.15 4 13.901 4 8.396 4 5.967 5.867 4 8.17 4c1.365 0 2.572.692 3.33 1.762C12.258 4.692 13.473 4 14.83 4 17.133 4 19 5.966 19 8.397c0 5.505-4.86 8.754-7.035 9.532z"
        stroke="#ECEBEB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LikeOutlined