import * as React from "react"
import Svg, { Path } from "react-native-svg"
interface Props {}

const WalletIcon = (props: Props) => (
	<Svg width={29} height={29} fill="none" {...props}>
		<Path
			fill="#fff"
			clipRule="evenodd"
			fillRule="evenodd"
			d="m7.369 28.228 15.277-1.283c3.168-.266 5.604-2.934 5.604-6.137v-9.673c0-3.707-3.227-6.574-6.876-6.11l-.763.097L5.643 7.026C2.847 7.382.75 9.778.75 12.618v9.473c0 3.603 3.056 6.436 6.619 6.137Z"
		/>
		<Path
			fill="#fff"
			fillOpacity={0.69}
			d="M14.72 1.045 4.667 4.942A6.157 6.157 0 0 0 .75 10.69v1.928c0-2.84 2.097-5.236 4.893-5.592L20.61 5.122c0-3.065-3.051-5.177-5.89-4.077Z"
		/>
	</Svg>
)
export default WalletIcon
