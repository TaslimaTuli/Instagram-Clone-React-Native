import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import Lock from "../../assets/Profile/Lock.svg";
import AccountList from "../../assets/Profile/AccountList.svg";
import Menu from "../../assets/Profile/Menu.svg";
import Dp from "../../assets/Accounts/Dp.svg";
import NewStory from "../../assets/Profile/NewStory.svg";
import Story1 from "../../assets/Profile/Story1.svg";
import Grid from "../../assets/Profile/Grid.svg";
import Tags from "../../assets/Profile/Tags.svg";
import Post1 from "../../assets/Profile/Post1.svg";
import Post2 from "../../assets/Profile/Post2.svg";
import Post3 from "../../assets/Profile/Post3.svg";
import VideoPost from "../../assets/Profile/VideoPost.svg";

export default function Profile() {
	return (
		<View>
			<SafeAreaView className="bg-slate-50">
				<StatusBar backgroundColor="rgb(248 250 252)" barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View className="flex-1 flex-row items-center justify-between px-4 py-6">
						<View className="flex-1 flex-row items-center justify-center">
							<Lock />
							<Text className="px-2 font-extrabold text-lg text-gray-700">jacob_w</Text>
							<TouchableOpacity>
								<AccountList />
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<Menu />
						</TouchableOpacity>
					</View>

					<View className="flex-1 flex-row px-3">
						{/* Account Info */}
						<Dp />
						<View className="flex-row items-center justify-center  mt-2 ml-12">
							<TouchableOpacity className="items-center mx-3">
								<Text className="text-lg text-gray-900 font-bold">5</Text>
								<Text className="text-base text-gray-800">Posts</Text>
							</TouchableOpacity>
							<TouchableOpacity className="items-center mx-3">
								<Text className="text-lg text-gray-900 font-bold">834</Text>
								<Text className="text-base text-gray-800">Followers</Text>
							</TouchableOpacity>
							<TouchableOpacity className="items-center mx-3">
								<Text className="text-lg text-gray-900 font-bold">162</Text>
								<Text className="text-base text-gray-800">Following</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/* Account Name and Bio */}
					<View className="py-2 px-3 flex-1 ">
						<Text className="text-gray-900 font-extrabold text-base">Jacob West</Text>
						<Text className="text-gray-700 text-sm mr-40">
							Digital goodies designer <Text className="text-sky-700"> @pixsellz</Text> Everything is designed.
						</Text>
					</View>
					{/* Edit Profile Button */}
					<View className="px-3 py-1">
						<TouchableOpacity className="items-center justify-center bg-white py-1 rounded-lg border border-gray-300">
							<Text className="text-base font-extrabold text-gray-900">Edit Profile</Text>
						</TouchableOpacity>
					</View>
					{/* Highlight Collection */}
					<View className="flex-1 flex-row px-1 py-3">
						<TouchableOpacity className="items-center mx-2">
							<NewStory />
							<Text className="text-sm text-gray-900">New</Text>
						</TouchableOpacity>
						<TouchableOpacity className="items-center mx-2">
							<Story1 />
							<Text className="text-sm text-gray-900">Friends</Text>
						</TouchableOpacity>
					</View>
					<View className="w-screen h-px bg-zinc-200" />
					{/* Posts */}
					<View className="flex-1 flex-row items-center justify-between pt-2 mr-20">
						<TouchableOpacity>
							<Grid />
						</TouchableOpacity>
						<TouchableOpacity>
							<Tags />
						</TouchableOpacity>
					</View>
					<View>
						<View className="flex-row flex-wrap">
							<TouchableOpacity className="w-1/3 p-0.5">
								<Post1 />
							</TouchableOpacity>
							<TouchableOpacity className="w-1/3 p-0.5">
								<VideoPost />
							</TouchableOpacity>
							<TouchableOpacity className="w-1/3 p-0.5">
								<Post2 />
							</TouchableOpacity>
							<TouchableOpacity className="w-1/3 p-0.5">
								<Post2 />
							</TouchableOpacity>
							<TouchableOpacity className="w-1/3 p-0.5">
								<Post3 />
							</TouchableOpacity>

							{/* <View className="w-1/3 p-0.5">
								<Post1 />
							</View> */}
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
