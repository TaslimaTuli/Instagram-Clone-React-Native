import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";

import Logo from "../../assets/Logo.svg";
import FB from "../../assets/Fb.svg";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleLogin = () => {
		navigation.navigate("Home");
	};

	const isButtonDisabled = username === "" || password === "";
	return (
		<View className="flex-1 bg-slate-50  mx-3">
			<StatusBar backgroundColor="rgb(248 250 252)" barStyle={"dark-content"} />
			<KeyboardAvoidingView behavior="padding" className="flex-1 justify-end items-center">
				<SafeAreaView className="flex-1">
					<View className="flex-1 items-center justify-between">
						<View className="flex-1 items-center justify-center space-y-16">
							<Logo />
							<View className="items-center justify-center space-y-3">
								<TextInput
									className="text-lg text-left text-gray-600 w-[325] px-3 py-2.5 rounded-md bg-slate-100 border border-gray-200"
									blurOnSubmit="true"
									placeholder="username"
									value={username}
									onChangeText={setUsername}
								/>
								<TextInput
									className="text-lg text-gray-600 w-[325] px-3 py-2.5 rounded-md bg-slate-100 border border-gray-200"
									blurOnSubmit="true"
									secureTextEntry
									placeholder="password"
									value={password}
									onChangeText={setPassword}
								/>
								<View className="w-[325] items-end mb-3">
									<TouchableOpacity>
										<Text className="text-sm text-sky-500">Forgot password?</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity
									className={`items-center justify-center px-36 py-2.5 bg-sky-500 rounded-md ${isButtonDisabled ? "opacity-50" : ""}`}
									onPress={handleLogin}
									disabled={isButtonDisabled}
								>
									<Text className="text-lg font-bold text-slate-50">Log In</Text>
								</TouchableOpacity>
								<View className="items-center pt-4 flex-row">
									<FB />
									<TouchableOpacity className="pl-2">
										<Text className="text-sm font-semibold text-sky-500">Log in with Facebook</Text>
									</TouchableOpacity>
								</View>
								<View className="pt-4">
									<View className="flex-row items-center w-[325]">
										<View className="flex-1 h-px  bg-gray-200" />
										<View>
											<Text className="w-12 text-center">OR</Text>
										</View>
										<View className="flex-1 h-px bg-gray-200" />
									</View>
									<View className="flex-row pt-6 items-center justify-center">
										<Text className="text-gray-500">Don’t have an account? </Text>
										<TouchableOpacity>
											<Text className="text-sky-500 font-bold">Sign up</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					</View>
				</SafeAreaView>
			</KeyboardAvoidingView>
			{/* <View className="w-full items-center justify-center space-y-3 pb-5">
				<View className="w-screen h-px bg-gray-200" />
				<View className="flex-row">
					<Text className="text-gray-500">Instagram от Facebook</Text>
				</View>
			</View> */}
		</View>
	);
}
