import { Stack } from "expo-router"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<Stack screenOptions={{ headerShadowVisible: false }}>
					<Stack.Screen name="index" />
				</Stack>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	)
}
