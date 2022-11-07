import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const Ayuda = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={13} cy={13} r={13} fill="#F9F3EC" />
    <Path
      d="M11 18.5a1.498 1.498 0 0 1 1.5-1.498A1.5 1.5 0 1 1 11 18.5Zm.147-9a1.356 1.356 0 0 1 2.359-1.05 1.356 1.356 0 0 1 .341 1.05l-.525 5.256a.829.829 0 0 1-1.65 0L11.147 9.5Z"
      fill="#0E2A55"
    />
  </Svg>
)

export default Ayuda