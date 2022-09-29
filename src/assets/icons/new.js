import * as React from "react"
import Svg, { Path } from "react-native-svg"

const New = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      d="M7.944 1.278v13.444M7.944 1.278v13.444M1.278 8.056h13.444M1.278 8.056h13.444"
    />
  </Svg>
)

export default New

