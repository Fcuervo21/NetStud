import React from "react";
import Svg, { Path } from "react-native-svg"

const CloseForm = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <Path
        fill="#EF5858"
        d="M17.637 8.363a1.25 1.25 0 00-1.774 0L13 11.238l-2.863-2.875a1.255 1.255 0 10-1.774 1.774L11.238 13l-2.875 2.863a1.25 1.25 0 000 1.774 1.248 1.248 0 001.774 0L13 14.762l2.863 2.875a1.249 1.249 0 001.774 0 1.248 1.248 0 000-1.774L14.762 13l2.875-2.863a1.248 1.248 0 000-1.774zm4.2-4.2A12.5 12.5 0 104.163 21.837 12.5 12.5 0 1021.837 4.163zm-1.762 15.912A10 10 0 1123 13a9.936 9.936 0 01-2.925 7.075z"
      ></Path>
    </Svg>
)

export default CloseForm;