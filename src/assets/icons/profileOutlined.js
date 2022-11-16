import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ProfileOutlined(props) {
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
        d="M11.59 12.085a.722.722 0 00-.18 0 2.457 2.457 0 01.09-4.913 2.457 2.457 0 01.09 4.913zM16.555 17.035A7.45 7.45 0 0111.5 19a7.45 7.45 0 01-5.055-1.965c.075-.705.525-1.395 1.328-1.935 2.055-1.365 5.415-1.365 7.454 0 .803.54 1.253 1.23 1.328 1.935z"
        stroke="#ECEBEB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 19a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke="#ECEBEB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileOutlined
