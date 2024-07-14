import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIconFocused from "../assets/BottomTab/Focused/HomeF.svg";
import LoveIconFocused from "../assets/BottomTab/Focused/LoveF.svg";
import ProfileIconFocused from "../assets/BottomTab/Focused/ProfileF.svg";
import SearchIconFocused from "../assets/BottomTab/Focused/SearchF.svg";

import HomeIcon from "../assets/BottomTab/Home.svg";
import SearchIcon from "../assets/BottomTab/Search.svg";
import PostIcon from "../assets/BottomTab/Post.svg";
import LoveIcon from "../assets/Posts/Love.svg";
import AccountIcon from "../assets/BottomTab/Profile.svg";

import Home from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PostImage from "../screens/PostImageScreen";

export default function BottomNavigator() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { backgroundColor: "rgb(248 250 252)" } }}
		>
			<Tab.Screen
				name={"HomeTab"}
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <HomeIconFocused /> : <HomeIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Search"}
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <SearchIconFocused /> : <SearchIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Post"}
				component={PostImage}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <PostIcon /> : <PostIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Notification"}
				component={NotificationScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <LoveIconFocused /> : <LoveIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"Profile"}
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <ProfileIconFocused /> : <AccountIcon />),
					unmountOnBlur: true,
				}}
			/>
		</Tab.Navigator>
	);
}
