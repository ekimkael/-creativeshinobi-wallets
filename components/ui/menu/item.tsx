import {
	Text,
	View,
	Platform,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import * as WebBrowser from "expo-web-browser"
import { useBottomSheet } from "@gorhom/bottom-sheet"

interface Props {
	data: {
		name: string
		path: string
		description: string
		isExternal: boolean
		// icon: LucideIcon
	}
}

const MenuItem = ({ data }: Props) => {
	const router = useRouter()
	const { close } = useBottomSheet()
	const openExternalLink = (event: GestureResponderEvent, path: string) => {
		if (Platform.OS !== "web") {
			// Prevent the default behavior
			// of linking to the default browser on native.
			event.preventDefault()
			WebBrowser.openBrowserAsync(path)
		}
	}

	const handleClick = (path: any) => {
		if (path.length > 0) {
			router.push(path)
		}
		close()
	}

	if (data.isExternal) {
		return (
			<TouchableOpacity
				style={styles.item}
				onPress={(e) => openExternalLink(e, data.path)}>
				<Text style={styles.text}>{data.name}</Text>
			</TouchableOpacity>
		)
	}

	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => handleClick(data.path)}>
			<View style={styles.image} />

			<View style={{ flex: 1 }}>
				<Text style={[styles.text, { fontWeight: "600" }]}>{data.name}</Text>
				<Text style={[styles.text, { color: "#667085" }]}>
					{data.description}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default MenuItem

const styles = StyleSheet.create({
	item: {
		gap: 16,
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 16,
		flexDirection: "row",
		backgroundColor: "hsl(210, 20%, 98%)",
	},
	image: {
		width: 36,
		height: 36,
		borderRadius: 36,
		backgroundColor: "darkblue",
	},
	text: { fontSize: 18, fontWeight: "400" },
})
