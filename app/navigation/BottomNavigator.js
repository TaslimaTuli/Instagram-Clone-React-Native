import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../assets/BottomTab/Home.svg";
import SearchIcon from "../assets/BottomTab/Search.svg";
import PostIcon from "../assets/BottomTab/Post.svg";
import LoveIcon from "../assets/Posts/Love.svg";
import AccountIcon from "../assets/Accounts/Dp.svg";

export default function BottomNavigator() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { borderRadius: 15 } }}>
			{/* <Tab.Screen
				name={"HomeIcon"}
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <GreenHomeIcon /> : <HomeIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Booking"}
				component={BookingHistoryScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <GreenBookingIcon /> : <BookingIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Profile"}
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <GreenProfileIcon /> : <ProfileIcon />),
					unmountOnBlur: true,
				}}
			/> */}
		</Tab.Navigator>
	);
}
