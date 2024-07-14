import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Camera } from "react-native-vision-camera";

import Cam from "../../assets/Header/Cam.svg";
import Logo from "../../assets/LogoSmall.svg";
import Reels from "../../assets/Header/Reels.svg";
import Msg from "../../assets/Header/Msg.svg";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
	const navigation = useNavigation();

	// useEffect(() => {
	// 	CheckPermission();
	// }, []);

	// const CheckPermission = async () => {
	// 	const newCameraPermission = await Camera.requestCameraPermission();
	// 	const newMicrophonePermission = await Camera.requestMicrophonePermission();
	// 	console.log(newCameraPermission);
	// 	if (newCameraPermission !== "granted" || newMicrophonePermission !== "granted") {
	// 		Alert.alert("Permissions required", "Camera and microphone permissions are required to use this feature.");
	// 	}
	// };

	const handleCameraPress = async () => {
		// const cameraPermission = await Camera.requestCameraPermission();
		// const microphonePermission = await Camera.requestMicrophonePermission();

		// if (cameraPermission === "granted" && microphonePermission === "granted") {
		// 	console.log("Camera and microphone permissions granted");
		// 	navigation.navigate("CameraScreen"); // Navigate to CameraScreen
		// } else {
		// 	Alert.alert("Permissions required", "Camera and microphone permissions are required to use this feature.");
		// }
		navigation.navigate("CameraScreen"); // Navigate to CameraScreen
	};

	return (
		<View className="flex flex-row items-center justify-between px-3.5 py-3 bg-gray-50  h-16 border-b border-zinc-300">
			<StatusBar backgroundColor="rgb(249 250 251)" barStyle={"dark-content"} />
			<TouchableOpacity onPress={handleCameraPress}>
				<Cam />
			</TouchableOpacity>

			<View className="pl-10">
				<Logo />
			</View>
			<View className="flex flex-row items-center justify-evenly space-x-4">
				<TouchableOpacity>
					<Reels />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("DirectMessages");
					}}
				>
					<Msg />
				</TouchableOpacity>
			</View>
		</View>
	);
}
