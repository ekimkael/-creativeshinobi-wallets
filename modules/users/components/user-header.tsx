import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import GitIcon from "@/components/icons/git"
import PlusIcon from "@/components/icons/plus"

interface Props {}

const UserHeader = (props: Props) => {
	return (
		<View id="wallets-header" style={styles.container}>
			<View id="wallets-header-title">
				<Text style={{ fontSize: 20, fontWeight: "500" }}>Watching</Text>
			</View>

			<View
				id="wallets-header-actions"
				style={{ flexDirection: "row", gap: 8 }}>
				<TouchableOpacity style={styles.btn}>
					<GitIcon />
				</TouchableOpacity>

				<TouchableOpacity style={styles.btn}>
					<PlusIcon />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default UserHeader

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	btn: {
		width: 32,
		height: 32,
		borderRadius: 32,
		alignItems: "center",
		justifyContent: "center",
	},
})
