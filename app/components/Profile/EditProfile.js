import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Dp from "../../assets/Accounts/Dp.svg";

export default function EditProfile() {
	const navigation = useNavigation();
	const handleDone = () => {};

	return (
		<ScrollView className="h-screen bg-white">
			<StatusBar backgroundColor="rgb(248 250 252 )" barStyle={"dark-content"} />
			<View className="bg-slate-50 px-4 py-4 flex-row items-center justify-between">
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Text className="text-lg font-medium text-gray-700">Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text className="text-lg font-bold text-gray-800">Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleDone}>
					<Text className="text-lg font-bold text-sky-500">Done</Text>
				</TouchableOpacity>
			</View>
			<View className="pt-5 items-center justify-center">
				<Dp />
				<TouchableOpacity>
					<Text className="text-base font-bold text-sky-500 py-2.5">Change Profile Photo</Text>
				</TouchableOpacity>
				<View className="w-full h-px bg-gray-200 mt-1" />
			</View>

			<View className="">
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Name</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="Jacob West" />
				</View>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Username</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="jacob_w" textContentType="username" />
				</View>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Website</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="Website" inputMode="url" />
				</View>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Bio</Text>
					<TextInput
						className=" w-60"
						placeholder="Digital goodies designer @pixsellz Everything is designed."
						// editable
						multiline
						dataDetectorType={"all"}
						numberOfLines={1}
						maxLength={20}
					/>
				</View>
				<View className="w-full h-px bg-gray-200 mt-1" />

				<TouchableOpacity className="py-4 px-4">
					<Text className="text-base font-medium text-sky-500">Switch to Professional Account</Text>
				</TouchableOpacity>
				<Text className="text-base font-bold text-gray-800 py-2 px-4">Private Information</Text>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Email</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="jacob.west@gmail.com" inputMode="email" />
				</View>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Phone</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="+1 202 555 0147" inputMode="tel" />
				</View>
				<View className="flex-row justify-between items-center px-4">
					<Text className="text-base font-medium text-gray-700">Gender</Text>
					<TextInput className="border-b border-gray-200 w-60" placeholder="Male" />
				</View>
			</View>
		</ScrollView>
	);
}
