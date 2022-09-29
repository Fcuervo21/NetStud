import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Home = (props) => (
	<Svg
		width={17}
		height={17}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			d="M7.054 1.486 1.857 5.728c-.585.474-.96 1.475-.832 2.224l.997 6.084C2.202 15.12 3.222 16 4.302 16H12.7c1.072 0 2.1-.887 2.28-1.964l.997-6.084c.12-.749-.255-1.75-.833-2.224L9.95 1.494c-.803-.657-2.1-.657-2.895-.008Z"
			stroke="#344B6E"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M8.38 13v-2.25"
			stroke="#344B6E"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default Home;
