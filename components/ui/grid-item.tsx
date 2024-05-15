import { StyleSheet, Text, View } from "react-native"
import React from "react"
import IconButton from "./icon-button"
import MoreIcon from "../icons/more"
import WalletIcon from "../icons/wallet"

interface Props {
	data: any
}

const GridItem = ({ data }: Props) => {
	return (
		<View style={[styles.grid, { backgroundColor: data.color }]}>
			<View style={styles.header}>
				{data.image ? <Text>Icon</Text> : <WalletIcon />}

				<IconButton
					onPress={() => alert("show context menu")}
					style={styles.btn}>
					<MoreIcon fill="white" />
				</IconButton>
			</View>

			<View>
				<Text style={styles.name}>{data.name}</Text>
				<Text style={[styles.name, styles.pricing]}>
					{data.amount} {data.currency}
				</Text>
			</View>
		</View>
	)
}

export default GridItem

const styles = StyleSheet.create({
	grid: {
		flex: 1,
		gap: 16,
		padding: 12,
		borderRadius: 16,
		backgroundColor: "lightgrey",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btn: { backgroundColor: "hsla(0, 0%, 100%, 0.24)" },
	name: {
		fontSize: 16,
		fontWeight: "600",
		color: "white",
	},
	pricing: {
		fontWeight: "500",
		color: "hsla(0, 0%, 100%, 0.7)",
	},
})
