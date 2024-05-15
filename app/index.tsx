import { Stack } from "expo-router"
import { Fragment } from "react"
import {
	Text,
	View,
	StyleSheet,
	Pressable,
	FlatList,
	ScrollView,
} from "react-native"

import CogIcon from "@/components/icons/cog"
import GridItem from "@/components/ui/grid-item"
import QuestionMarkIcon from "@/components/icons/question-mark"
import WalletHeader from "@/modules/wallet/components/wallet-header"
import UserHeader from "@/modules/users/components/user-header"
import UserCard from "@/modules/users/components/user-card"

const data = [
	{
		image: "",
		color: "#875BF7",
		name: "Benji",
		amount: 0.03,
		currency: "ETH",
	},
	{
		image: "",
		color: "#66C61C",
		name: "Spending",
		amount: 0,
		currency: "ETH",
	},
	{
		image: "",
		color: "#12B76A",
		name: "Lunch Money",
		amount: 0.03,
		currency: "ETH",
	},
	{
		image: "",
		color: "#F79009",
		name: "BFF",
		amount: 0.04,
		currency: "ETH",
	},
	{
		image: "",
		color: "#101323",
		name: "F1",
		amount: 0.03,
		currency: "ETH",
	},
	{
		image: "",
		color: "#101323",
		name: "Family",
		amount: 0.05,
		currency: "ETH",
	},
	{
		image: "",
		color: "#FAC415",
		name: "Test",
		amount: 0,
		currency: "ETH",
	},
	{
		image: "",
		color: "#EE46BC",
		name: "Rainy Day",
		amount: 0.03,
		currency: "ETH",
	},
]

const users = [
	{
		avatar: "https://randomuser.me/api/portraits/women/96.jpg",
		firstname: "Sophia",
		lastname: "Lynch",
	},
	{
		avatar: "https://randomuser.me/api/portraits/men/0.jpg",
		firstname: "Gordon",
		lastname: "Olson",
	},
	{
		avatar: "https://randomuser.me/api/portraits/women/15.jpg",
		firstname: "Bobbie",
		lastname: "Walters",
	},
]

export default function Index() {
	return (
		<Fragment>
			<Stack.Screen
				options={{
					title: "Wallets",
					headerLeft: (props) => {
						return (
							<Pressable onPress={() => alert("clicked!")}>
								<CogIcon />
							</Pressable>
						)
					},
					headerRight: (props) => (
						<Pressable onPress={() => alert("clicked!")}>
							<QuestionMarkIcon />
						</Pressable>
					),
				}}
			/>

			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				contentInset={{ bottom: 16 }}>
				<View>
					<WalletHeader />

					<View style={{ marginBottom: 48 }}>
						<FlatList
							data={data}
							numColumns={2}
							scrollEnabled={false}
							columnWrapperStyle={{ gap: 16 }}
							keyExtractor={(item) => item.name}
							contentContainerStyle={{ gap: 16 }}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => <GridItem data={item} />}
						/>
					</View>

					<View>
						<UserHeader />

						<FlatList
							data={users}
							numColumns={3}
							scrollEnabled={false}
							columnWrapperStyle={{ gap: 16 }}
							contentContainerStyle={{ gap: 16 }}
							renderItem={({ item }) => <UserCard data={item} />}
						/>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: "white",
	},
})
