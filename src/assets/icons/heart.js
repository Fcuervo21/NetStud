import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Heart = (props) => (
	<Svg
		width={17}
		height={16}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			d="M8.965 14.93a1.562 1.562 0 0 1-.93 0C5.86 14.15 1 10.901 1 5.396 1 2.967 2.868 1 5.17 1c1.365 0 2.572.692 3.33 1.762C9.258 1.692 10.473 1 11.83 1 14.133 1 16 2.966 16 5.397c0 5.505-4.86 8.754-7.035 9.532Z"
			stroke="#344B6E"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default Heart;
