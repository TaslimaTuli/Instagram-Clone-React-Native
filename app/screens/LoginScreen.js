import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import Logo from "../assets/Logo.svg";
import DP from "../assets/Accounts/Dp.svg";

export default function LoginScreen() {
	return (
		<View className="flex-1 bg-slate-50">
			<SafeAreaView className="flex-1">
				<StatusBar backgroundColor="rgb(248 250 252)" barStyle={"dark-content"} />
				<View className="flex-1 items-center justify-between mx-3">
					<View className="flex-1 items-center justify-center space-y-16">
						<Logo />
						<View className="items-center justify-center space-y-3">
							<DP />
							<Text className="text-xl font-bold text-gray-700">jacob_w</Text>
							<TouchableOpacity className="items-center justify-center px-36 py-2.5 bg-sky-500 rounded-md">
								<Text className="text-lg font-bold text-slate-50">Log In</Text>
							</TouchableOpacity>
							<TouchableOpacity className="items-center justify-center pt-4">
								<Text className="text-lg font-bold text-sky-500">Switch accounts</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View className="w-full items-center justify-center space-y-3 pb-8">
						<View className="w-screen h-px bg-gray-200" />
						<View className="flex-row">
							<Text className="text-gray-500">Don’t have an account? </Text>
							<TouchableOpacity>
								<Text className="text-sky-500 font-bold">Sign up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
