import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import Story1 from "../../assets/Accounts/Stories/Dp2.svg";
import Story2 from "../../assets/Accounts/Stories/Dp3.svg";
import MyStory from "../../assets/Accounts/Stories/MyStory.svg";

export default function Stories() {
	const stories = [
		{ id: 1, image: Story1, username: "kieron_d" },
		{ id: 2, image: Story1, username: "kieron_d" },
		{ id: 3, image: Story1, username: "karennne" },
	];
	return (
		<View>
			<ScrollView className="bg-white" horizontal showsHorizontalScrollIndicator={false}>
				<View className="flex-row items-center justify-center py-2">
					<TouchableOpacity className="space-y-1 px-2">
						<MyStory />
						<Text className="items-center justify-center  px-2">Your Story</Text>
					</TouchableOpacity>
					<TouchableOpacity className="px-2">
						<Story2 />
						<Text className="items-center justify-center px-2">karennne</Text>
					</TouchableOpacity>
					{stories.map((story) => (
						<TouchableOpacity key={story.id} className="px-2 space-y-1">
							<story.image />
							<Text className="items-center justify-center px-2">{story.username}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			<View className="w-screen h-px bg-zinc-200" />
		</View>
	);
}
