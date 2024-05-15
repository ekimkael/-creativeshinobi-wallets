import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"

interface Props {
	data: any
}

const UserCard = ({ data }: Props) => {
	return (
		<View style={styles.container}>
			<Image style={styles.avatar} source={{ uri: data.avatar }} />
			<Text style={styles.name}>{data.firstname}</Text>
		</View>
	)
}

export default UserCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 80,
	},
	name: {
		fontWeight: "500",
	},
})
