import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../assets/BottomTab/Focused/HomeF.svg";
import SearchIcon from "../assets/BottomTab/Search.svg";
import PostIcon from "../assets/BottomTab/Post.svg";
import LoveIcon from "../assets/Posts/Love.svg";
import AccountIcon from "../assets/BottomTab/Profile.svg";

import Home from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";

export default function BottomNavigator() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { borderRadius: 15 } }}>
			<Tab.Screen
				name={"HomeTab"}
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <HomeIcon /> : <HomeIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Search"}
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <SearchIcon /> : <SearchIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Post"}
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <PostIcon /> : <PostIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Notification"}
				component={NotificationScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <LoveIcon /> : <LoveIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Profile"}
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <AccountIcon /> : <AccountIcon />),
					unmountOnBlur: true,
				}}
			/>
		</Tab.Navigator>
	);
}
