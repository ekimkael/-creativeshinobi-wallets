import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native"
import React, { ReactNode } from "react"

interface Props extends TouchableOpacityProps {
	children: ReactNode
}

const IconButton = ({ children, style, ...rest }: Props) => {
	return (
		<TouchableOpacity style={[styles.btn, style]} {...rest}>
			{children}
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	btn: {
		width: 32,
		height: 32,
		backgroundColor: "whitesmoke",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 32,
	},
})
