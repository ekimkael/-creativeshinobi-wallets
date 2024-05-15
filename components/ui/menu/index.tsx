import {
	BottomSheetView,
	BottomSheetModal,
	BottomSheetBackdrop,
} from "@gorhom/bottom-sheet"
import React, { useCallback, useMemo, useRef } from "react"
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native"
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types"

import MenuItem from "./item"
import MenuButton from "./button"

interface Props {}

const links = [
	{
		name: "Add Existing",
		description: "Add an existing wallet by importing or restoring.",
		path: "/",
		isExternal: false,
		icon: "Home",
	},
	{
		icon: "Bookmark",
		description: "Create a fresh address with no previous history.",
		isExternal: false,
		name: "Create New",
		path: "/tickets/with-code",
	},
]

const Menu = (props: Props) => {
	const bottomSheetModalRef = useRef<BottomSheetModal>(null)
	const snapPoints = useMemo(() => ["39%"], [])

	// callbacks
	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present()
	}, [])

	const handleCloseModalPress = useCallback(() => {
		bottomSheetModalRef.current?.close()
	}, [])

	// renders
	const renderBackdrop = useCallback(
		(props: BottomSheetDefaultBackdropProps) => (
			<BottomSheetBackdrop
				{...props}
				appearsOnIndex={0}
				disappearsOnIndex={-1}
			/>
		),
		[]
	)

	// ----------COMPONENTS----------

	return (
		<View>
			<MenuButton onPress={handlePresentModalPress} />

			<BottomSheetModal
				index={0}
				containerStyle={styles.modal}
				snapPoints={snapPoints}
				ref={bottomSheetModalRef}
				handleIndicatorStyle={{ display: "none" }}
				backdropComponent={renderBackdrop}>
				<BottomSheetView style={styles.container}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							paddingVertical: 16,
							marginBottom: 24,
							// backgroundColor: "red",
						}}>
						<Text style={{ fontSize: 20, fontWeight: "600" }}>New wallet</Text>

						<Pressable
							onPress={handleCloseModalPress}
							style={{ backgroundColor: "red" }}>
							<Text>Close</Text>
						</Pressable>
					</View>
					<FlatList
						data={links}
						contentContainerStyle={{ gap: 16 }}
						renderItem={({ item }) => <MenuItem data={item} />}
					/>
				</BottomSheetView>
			</BottomSheetModal>
		</View>
	)
}

export default Menu

const styles = StyleSheet.create({
	modal: {
		marginHorizontal: 16,
		marginBottom: 24,
		borderRadius: 16,
	},
	container: { marginHorizontal: 24 },
})
