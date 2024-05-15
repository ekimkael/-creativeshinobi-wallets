import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native"
import React from "react"
import PlusIcon from "@/components/icons/plus"

interface Props extends TouchableOpacityProps {}

const MenuButton = (props: Props) => {
	return (
		<TouchableOpacity style={styles.btn} {...props}>
			<PlusIcon />
		</TouchableOpacity>
	)
}

export default MenuButton

const styles = StyleSheet.create({
	btn: {
		width: 32,
		height: 32,
		borderRadius: 32,
		alignItems: "center",
		justifyContent: "center",
	},
})
