import React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {}

const PlusIcon = (props: Props) => {
	return (
		<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M10 4.16669V15.8334M4.16667 10H15.8333"
				stroke="#98A2B3"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

export default PlusIcon
