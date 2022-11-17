import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogOut(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.167 2.167h5A.836.836 0 008 1.333.836.836 0 007.167.5h-5C1.25.5.5 1.25.5 2.167v11.666c0 .917.75 1.667 1.667 1.667h5A.836.836 0 008 14.667a.836.836 0 00-.833-.834h-5V2.167z"
        fill="#344B6E"
      />
      <Path
        d="M15.208 7.708l-2.325-2.325a.417.417 0 00-.716.292v1.492H6.333A.836.836 0 005.5 8c0 .458.375.833.833.833h5.834v1.492c0 .375.45.558.708.292L15.2 8.292a.41.41 0 00.008-.584z"
        fill="#344B6E"
      />
    </Svg>
  )
}

export default LogOut