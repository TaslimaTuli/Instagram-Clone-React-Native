import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import Cam from "../../assets/Header/Cam.svg";
import Logo from "../../assets/LogoSmall.svg";
import Reels from "../../assets/Header/Reels.svg";
import Msg from "../../assets/Header/Msg.svg";

export default function Header() {
	return (
		<View className="flex flex-row items-center justify-between px-3.5 py-3 bg-neutral-100  h-16 border-b border-zinc-300">
			<StatusBar backgroundColor="rgb(245 245 245)" barStyle={"dark-content"} />
			<TouchableOpacity>
				<Cam />
			</TouchableOpacity>

			<View className="pl-10">
				<Logo />
			</View>
			<View className="flex flex-row items-center justify-evenly space-x-4">
				<TouchableOpacity>
					<Reels />
				</TouchableOpacity>
				<TouchableOpacity>
					<Msg />
				</TouchableOpacity>
			</View>
		</View>
	);
}
