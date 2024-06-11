import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import User from "../../assets/Accounts/DpSm.svg";
import BlueTick from "../../assets/Posts/BlueTick.svg";
import More from "../../assets/Posts/More.svg";
import Post from "../../assets/Posts/UserPost.svg";
import Love from "../../assets/Posts/Love.svg";
import Comments from "../../assets/Posts/Comments.svg";
import Share from "../../assets/Posts/Share.svg";
import Save from "../../assets/Posts/Save.svg";
import UserSmall from "../../assets/Accounts/DpXs.svg";

export default function Posts() {
	return (
		<View className="flex-1 mb-2">
			<View className="flex-row items-center justify-between px-4 py-3 bg-slate-50 ">
				<User />
				<View className="pr-60 flex-col">
					<Text className="text-base font-extrabold text-gray-700">
						joshua_l <BlueTick />
					</Text>
					<Text className="text-xs  text-gray-600">Tokyo, Japan</Text>
				</View>
				<More />
			</View>
			<View className="items-center justify-center w-screen">
				<Post />
			</View>
			<View className="flex-row items-center justify-start px-4 py-1 space-x-5">
				<TouchableOpacity>
					<Love />
				</TouchableOpacity>
				<TouchableOpacity>
					<Comments />
				</TouchableOpacity>
				<TouchableOpacity>
					<Share />
				</TouchableOpacity>
				<View className="flex-row items-center justify-center pl-10">
					{[...Array(3).keys()].map((index) => (
						<View key={index} className={`${index === 0 ? "bg-blue-400" : "bg-gray-400"} w-2 h-2 rounded-full mx-1`} />
					))}
				</View>
				<View className="pl-[100]">
					<TouchableOpacity>
						<Save />
					</TouchableOpacity>
				</View>
			</View>
			<View className="flex-row items-center justify-start px-4 py-1 space-x-2">
				<UserSmall />
				<Text className="text-gray-700 text-base">
					Liked by <Text className="font-bold">craig_love</Text> and <Text className="font-bold">44,686 others</Text>
				</Text>
			</View>
			<View className="flex-row items-center justify-start px-4">
				<Text className="text-gray-700 text-base">
					<Text className="font-bold">joshua_l</Text> The game in Japan was amazing and I want to share some photos
				</Text>
			</View>
		</View>
	);
}
