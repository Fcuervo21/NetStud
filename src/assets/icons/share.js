import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Share = (props) => (
  <Svg
    width={17}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m10.95 0-.66.441 4.92 4.89H4.877C2.19 5.331 0 7.503 0 10.165 0 12.829 2.19 15 4.876 15l.045-.882c-1.931 0-4.026-2.056-4.026-3.97 0-1.916 2.05-3.972 3.98-3.972H15.21l-2.684 2.648-2.236 2.205.66.613 2.918-2.818 2.685-2.648.447-.44-.447-.442L10.949 0Z"
      fill="#344B6E"
    />
  </Svg>
)

export default Share