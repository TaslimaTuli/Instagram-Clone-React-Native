import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
	const navigation = useNavigation();
	return (
		<DrawerContentScrollView {...props}>
			<View className="flex-1 px-4 py-6">
				<View className="flex-row items-center mb-4">
					<Text className="text-lg font-bold">s.khasanov_</Text>
				</View>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Archive</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Your Activity</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Nametag</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Saved</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Close Friends</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Discover People</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Open Facebook</Text>
				</TouchableOpacity>
				<View className="border-t border-gray-200 my-4" />
				<TouchableOpacity onPress={() => {}} className="flex-row items-center py-2">
					<Text className="text-base">Settings</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
}
