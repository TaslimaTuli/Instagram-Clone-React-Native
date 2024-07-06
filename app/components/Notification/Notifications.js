import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import DpSm from "../../assets/Accounts/DpSm.svg";
import DpGroup from "../../assets/Accounts/DpGroup.svg";
import LikedPost from "../../assets/Notification/LikedPost.svg";
import Like from "../../assets/Notification/Like.svg";

export default function Notifications() {
	return (
		<View>
			<SafeAreaView className="bg-slate-50 mb-4">
				<StatusBar backgroundColor="rgb(248 250 252)" barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View className="py-3">
						<Text className="p-3 text-base text-gray-800">Follow Requests</Text>
						<View className="w-full h-px bg-zinc-200" />
					</View>
					<View className="px-3">
						<Text className="text-lg font-bold text-gray-800 pb-3">New</Text>
						<View className="flex-row items-center py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">karenne</Text> liked your photo.
									<Text className="text-gray-400"> 1h</Text>
								</Text>
							</View>
							<LikedPost width={50} height={50} />
						</View>
						<View className="w-full h-px bg-zinc-200" />
					</View>
					{/* Today */}
					<View className="">
						<Text className="text-lg font-bold text-gray-800 px-3 py-3">Today</Text>
						<View className="flex-row items-center px-3 py-2">
							<DpGroup width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">kiero_d</Text>, <Text className="font-bold">zackjohn</Text> and
									<Text className="font-bold"> 26 others</Text> liked your photo.
									<Text className="text-gray-400"> 3h</Text>
								</Text>
							</View>
							<LikedPost width={50} height={50} />
						</View>
						<View className="w-full h-px bg-zinc-200" />
					</View>
					{/* This Week */}
					<View className="">
						<Text className="text-lg font-bold text-gray-800 px-3 py-3">This Week</Text>
						<View className="flex-row px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">craig_love</Text> mentioned you in a comment:
									<Text className="text-blue-500"> @jacob_w</Text> exactly..💫
									<Text className="text-gray-400"> 2d</Text>
								</Text>
								<View className="flex-row items-center pt-1">
									<Like />
									<TouchableOpacity>
										<Text className="text-gray-400 ml-4"> Reply</Text>
									</TouchableOpacity>
								</View>
							</View>
							<LikedPost width={50} height={50} />
						</View>

						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">martini_rond</Text> started following you.
									<Text className="text-gray-400"> 3d </Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-white border border-gray-300 py-1 px-4 rounded-md ml-16">
								<Text className="text-gray-700 font-bold text-base">Message</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">maxjacobson</Text> started following you.
									<Text className="text-gray-400"> 3d</Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-white border border-gray-300 py-1 px-4 rounded-md ml-16">
								<Text className="text-gray-700 font-bold text-base">Message</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">mis_potter</Text> started following you.
									<Text className="text-gray-400"> 3d</Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-sky-500 py-1 px-6 rounded-md ml-16">
								<Text className="text-white font-bold text-base">Follow</Text>
							</TouchableOpacity>
						</View>
						<View className="w-full h-px mt-1 bg-zinc-200" />
					</View>
					{/* This Month */}
					<View className="">
						<Text className="text-lg font-bold text-gray-800 px-3 py-3">This Month</Text>
						<View className="flex-row px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">craig_love</Text> mentioned you in a comment:
									<Text className="text-blue-500"> @jacob_w</Text> exactly..💫
									<Text className="text-gray-400"> 2d</Text>
								</Text>
								<View className="flex-row items-center pt-1">
									<Like />
									<TouchableOpacity>
										<Text className="text-gray-400 ml-4"> Reply</Text>
									</TouchableOpacity>
								</View>
							</View>
							<LikedPost width={50} height={50} />
						</View>

						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">martini_rond</Text> started following you.
									<Text className="text-gray-400"> 3d </Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-white border border-gray-300 py-1 px-4 rounded-md ml-16">
								<Text className="text-gray-700 font-bold text-base">Message</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">maxjacobson</Text> started following you.
									<Text className="text-gray-400"> 3d</Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-white border border-gray-300 py-1 px-4 rounded-md ml-16">
								<Text className="text-gray-700 font-bold text-base">Message</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row items-center px-3 py-2">
							<DpSm width={40} height={40} />
							<View className="flex-1 px-3">
								<Text className="text-base text-gray-800">
									<Text className="font-bold">mis_potter</Text> started following you.
									<Text className="text-gray-400"> 3d</Text>
								</Text>
							</View>
							<TouchableOpacity className="bg-sky-500 py-1 px-6 rounded-md ml-16">
								<Text className="text-white font-bold text-base">Follow</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
