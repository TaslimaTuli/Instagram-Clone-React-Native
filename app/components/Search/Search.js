import React from "react";
import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";

import SearchIcon from "../../assets/Search/Search.svg";
import LiveIcon from "../../assets/Search/Live.svg";
import IGTV from "../../assets/Search/IGTV.svg";
import Shop from "../../assets/Search/Shop.svg";
import PicBig from "../../assets/Search/PicBig.svg";
import PicSmall1 from "../../assets/Search/PicSmall1.svg";
import PicSmall2 from "../../assets/Search/PicSmall2.svg";

export default function Search() {
	return (
		<SafeAreaView className="flex-1  bg-slate-50">
			<StatusBar backgroundColor="rgb(248 250 252)" barStyle={"dark-content"} />

			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Search bar */}
				<View className="flex-row items-center px-3.5 py-2 space-x-3">
					<View className="flex-1 flex-row items-center bg-gray-200 rounded-xl px-4 ">
						<SearchIcon />
						<TextInput placeholder="Search" className="flex-1 px-2 py-1 text-gray-600" />
					</View>
					<TouchableOpacity className="pr-1">
						<LiveIcon />
					</TouchableOpacity>
				</View>
				{/* Category Tabs */}
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View className="flex-row justify-center px-3 py-1">
						<TouchableOpacity className="bg-white flex-row items-center justify-center  px-3 mx-1 rounded-lg border border-gray-300">
							<IGTV />
							<Text className="text-gray-700 px-1 py-2 font-bold">IGTV</Text>
						</TouchableOpacity>
						<TouchableOpacity className="bg-white mx-0.5 flex-row px-3 items-center justify-center rounded-lg border border-gray-300">
							<Shop />
							<Text className="text-gray-700 px-1 py-2 font-bold">Shop</Text>
						</TouchableOpacity>
						{["Style", "Sports", "Auto", "Food"].map((category, index) => (
							<TouchableOpacity key={index} className="bg-white mx-1 rounded-lg border border-gray-300">
								<Text className="text-gray-700 px-4 py-2 font-bold">{category}</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				{/* Explore Images Grid */}
				<View className="pb-2">
					<View className="flex-row justify-evenly py-1">
						<View className="space-y-1">
							<PicSmall1 />
							<PicSmall2 />
						</View>
						<View className="">
							<PicBig />
						</View>
					</View>
					<View>
						<View className="flex-row justify-evenly px-1 space-x-1">
							<PicSmall1 />
							<PicSmall2 />
							<PicSmall1 />
						</View>
						<View className="flex-row pt-1 justify-evenly px-1 space-x-1">
							<PicSmall2 />
							<PicSmall1 />
							<PicSmall2 />
						</View>
					</View>
					<View className="flex-row justify-evenly py-1">
						<View className="">
							<PicBig />
						</View>
						<View className="space-y-1">
							<PicSmall1 />
							<PicSmall2 />
						</View>
					</View>
					<View>
						<View className="flex-row justify-evenly px-1 space-x-1">
							<PicSmall1 />
							<PicSmall2 />
							<PicSmall1 />
						</View>
						<View className="flex-row pt-1 justify-evenly px-1 space-x-1">
							<PicSmall2 />
							<PicSmall1 />
							<PicSmall2 />
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
