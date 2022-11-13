import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Liked = (props) => (
    <Svg
        width={17}
        height={16}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.589 3.279a5.393 5.393 0 00-1.12-1.712A5.19 5.19 0 0013.816.42 5.004 5.004 0 0011.801 0a5.068 5.068 0 00-3.3 1.222A5.067 5.067 0 005.201 0c-.699 0-1.376.14-2.015.42a5.179 5.179 0 00-1.653 1.147A5.36 5.36 0 00.413 3.28 5.532 5.532 0 000 5.386C0 6.074.134 6.79.4 7.52a9.74 9.74 0 00.948 1.881c.645 1.011 1.533 2.066 2.635 3.135a29.657 29.657 0 003.711 3.045l.467.314a.607.607 0 00.678 0l.467-.314a30.044 30.044 0 003.711-3.045c1.102-1.07 1.99-2.124 2.635-3.135a9.626 9.626 0 00.949-1.88c.265-.73.399-1.448.399-2.136a5.495 5.495 0 00-.411-2.107z"
            fill="#344B6E"
        />
    </Svg>
);

export default Liked;