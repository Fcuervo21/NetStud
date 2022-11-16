import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function NewOutlined(props) {
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
        stroke="#fff"
        strokeLinecap="round"
        d="M11.1667 4.5L11.1667 17.9444"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        d="M11.1667 4.5L11.1667 17.9444"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        d="M4.5 11.2778L17.9444 11.2778"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        d="M4.5 11.2778L17.9444 11.2778"
      />
    </Svg>
  )
}

export default NewOutlined
