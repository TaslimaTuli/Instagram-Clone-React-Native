import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Stories from "../components/Home/Stories";
import Posts from "../components/Home/Posts";
import Header from "../components/Home/Header";

export default function Home() {
	return (
		<View className="">
			<SafeAreaView>
				<ScrollView showsHorizontalScrollIndicator={false}>
					<Header />
					<Stories />
					<Posts />
					<Posts />
					<Posts />
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
