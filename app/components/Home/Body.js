import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Stories from "./Stories";
import Posts from "./Posts";
import Header from "./Header";

export default function Body() {
	return (
		<View className="">
			<SafeAreaView>
				<ScrollView showsHorizontalScrollIndicator={false}>
					<Header />
					<Stories />
					{/* posts */}
					<Posts />
					<Posts />
					<Posts />
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
