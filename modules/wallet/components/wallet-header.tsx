import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import GitIcon from "@/components/icons/git"
import PlusIcon from "@/components/icons/plus"
import Menu from "@/components/ui/menu"

interface Props {}

const WalletHeader = (props: Props) => {
	return (
		<View id="wallets-header" style={styles.container}>
			<View id="wallets-header-title">
				<Text style={{ fontSize: 20, fontWeight: "500" }}>Your Wallets</Text>
			</View>

			<View
				id="wallets-header-actions"
				style={{ flexDirection: "row", gap: 8 }}>
				<TouchableOpacity style={styles.btn}>
					<GitIcon />
				</TouchableOpacity>

				<Menu />
			</View>
		</View>
	)
}

export default WalletHeader

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
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
