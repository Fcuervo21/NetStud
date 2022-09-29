import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Profile = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.59 9.085a.722.722 0 0 0-.18 0 2.457 2.457 0 0 1 .09-4.912 2.457 2.457 0 0 1 .09 4.912ZM13.555 14.035A7.45 7.45 0 0 1 8.5 16a7.45 7.45 0 0 1-5.055-1.965c.075-.705.525-1.395 1.328-1.935 2.055-1.365 5.415-1.365 7.454 0 .803.54 1.253 1.23 1.328 1.935Z"
      stroke="#344B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      stroke="#344B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Profile