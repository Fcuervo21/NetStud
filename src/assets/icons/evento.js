import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const Evento = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={13} cy={13} r={13} fill="#F9F3EC" />
    <Path
      d="M16.889 13.8H13v4h3.889v-4ZM16.11 5v1.6H9.89V5H8.333v1.6h-.777c-.864 0-1.548.72-1.548 1.6L6 19.4c0 .424.164.831.456 1.131.291.3.687.469 1.1.469h10.888C19.3 21 20 20.28 20 19.4V8.2c0-.88-.7-1.6-1.556-1.6h-.777V5H16.11Zm2.333 14.4H7.556v-8.8h10.888v8.8Z"
      fill="#0E2A55"
    />
  </Svg>
)

export default Evento