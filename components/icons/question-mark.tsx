import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const QuestionMarkIcon = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" {...props}>
		<Path
			stroke="#98A2B3"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8.09 8a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
		/>
	</Svg>
)
export default QuestionMarkIcon
