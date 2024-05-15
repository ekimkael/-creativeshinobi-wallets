import React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {}

const GitIcon = (props: Props) => {
	return (
		<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				stroke="#98A2B3"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M2.5 2.5V11c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 15 5.1 15 6.5 15h6m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-10-8.333h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
			/>
		</Svg>
	)
}

export default GitIcon
