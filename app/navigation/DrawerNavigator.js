import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../components/Profile/Profile";
import CustomDrawer from "../components/Profile/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
	return (
		<Drawer.Navigator drawerPosition="right" drawerContent={(props) => <CustomDrawer {...props} />}>
			<Drawer.Screen
				name="Profile"
				component={CustomDrawer}
				options={{
					headerShown: false,
				}}
			/>
		</Drawer.Navigator>
	);
}
