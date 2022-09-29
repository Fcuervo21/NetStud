import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Messages = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.875 13.712H5.5c-3 0-4.5-.748-4.5-4.487V5.487C1 2.496 2.5 1 5.5 1h6c3 0 4.5 1.496 4.5 4.487v3.738c0 2.991-1.5 4.487-4.5 4.487h-.375a.76.76 0 0 0-.6.299L9.4 15.507c-.495.658-1.305.658-1.8 0L6.475 14.01a.849.849 0 0 0-.6-.3Z"
      stroke="#344B6E"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.497 7.75h.007M8.497 7.75h.006M5.496 7.75h.007"
      stroke="#344B6E"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Messages