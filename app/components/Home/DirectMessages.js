import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Cam from "../../assets/Header/Cam.svg";
import ColoredCam from "../../assets/Header/Direct messages/ColoredCam.svg";
import Plus from "../../assets/Header/Direct messages/Plus.svg";
import Back from "../../assets/Header/Direct messages/Back.svg";
import AccountList from "../../assets/Profile/AccountList.svg";
import Msg1 from "../../assets/Header/Direct messages/Msg1.svg";
import SearchIcon from "../../assets/Search/Search.svg";

const messages = [
	{
		id: 1,
		username: "joshua_l",
		message: "Have a nice day, bro!",
		time: "now",
	},
	{
		id: 2,
		username: "karennne",
		message: "I heard this is a good movie, s...",
		time: "now",
	},
	{
		id: 3,
		username: "martini_rond",
		message: "See you on the next meeting!",
		time: "15m",
	},
	{
		id: 4,
		username: "andrewww_",
		message: "Sounds good 😂😂😂",
		time: "20m",
	},
	{
		id: 5,
		username: "kiero_d",
		message: "The new design looks cool, b...",
		time: "1m",
	},
	// {
	// 	id: 6,
	// 	username: "maxjacobson",
	// 	message: "Thank you, bro!",
	// 	time: "2h",
	// },
	// {
	// 	id: 7,
	// 	username: "jamie.franco",
	// 	message: "Yeap, I'm going to travel in To...",
	// 	time: "4h",
	// },
	// {
	// 	id: 8,
	// 	username: "m_humphrey",
	// 	message: "Instagram UI is pretty good",
	// 	time: "5h",
	// },
	// {
	// 	id: 9,
	// 	username: "m_humphrey",
	// 	message: "Instagram UI is pretty good",
	// 	time: "5h",
	// },
	// {
	// 	id: 10,
	// 	username: "m_humphrey",
	// 	message: "Instagram UI is pretty good",
	// 	time: "5h",
	// },
];

export default function DirectMessages() {
	const navigation = useNavigation();
	return (
		<SafeAreaView className="flex-1 bg-gray-50">
			<StatusBar barStyle="dark-content" backgroundColor="rgb(249 250 251)" translucent={true} />

			{/* <View className="flex-1 bg-gray-50"> */}
			<ScrollView className="flex-1 bg-gray-50 ">
				<View className="items-center justify-between flex-row bg-gray-50 px-4 pb-4 pt-12">
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Back />
					</TouchableOpacity>

					<View className="flex-row items-center justify-center">
						<Text className="px-2 font-extrabold text-lg text-gray-700">jacob_w</Text>
						<TouchableOpacity>
							<AccountList />
						</TouchableOpacity>
					</View>
					<Plus />
				</View>
				{/* Search Bar */}
				<View className="flex-row bg-gray-50 items-center px-5 py-2 space-x-3">
					<View className="flex-1 flex-row items-center bg-gray-200 rounded-xl px-4 ">
						<SearchIcon />
						<TextInput placeholder="Search" className="flex-1 px-2 py-1.5 text-gray-600" />
					</View>
				</View>

				{messages.map((message) => (
					<TouchableOpacity key={message.id} className="flex-row items-center py-3 px-4">
						<View>
							<Msg1 />
						</View>
						<View className="flex-1 ml-4">
							<Text className="font-semibold text-lg text-gray-800">{message.username}</Text>
							<Text className="text-gray-600 text-base">{message.message}</Text>
						</View>
						<Text className="text-gray-400 pr-5">{message.time}</Text>
						<Cam />
					</TouchableOpacity>
				))}
			</ScrollView>

			<TouchableOpacity className="flex flex-row items-center justify-center space-x-2 py-4 bg-gray-200 rounded-t-3xl">
				<ColoredCam />
				<Text className="text-lg font-bold text-sky-500">Camera</Text>
			</TouchableOpacity>
			{/* </View> */}
		</SafeAreaView>
	);
}
