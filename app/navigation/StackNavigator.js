import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import NotificationScreen from "../screens/NotificationScreen";
import Profile from "../components/Profile/Profile";
import LoginForm from "../components/auth/Login";
import Search from "../components/Search/Search";
import BottomNavigator from "./BottomNavigator";
import CameraScreen from "../components/Home/CameraScreen";
import PostImage from "../screens/PostImageScreen";
import EditProfile from "../components/Profile/EditProfile";
import DirectMessages from "../components/Home/DirectMessages";
import MyDrawer from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Auth" component={LoginScreen} />
				<Stack.Screen name="Login" component={LoginForm} />

				<Stack.Screen name="Home" component={BottomNavigator} />
				<Stack.Screen
					name="CameraScreen"
					component={CameraScreen}
					options={{
						presentation: "modal",
						animationTypeForReplace: "push",
						animation: "slide_from_left",
					}}
				/>
				<Stack.Screen
					name="DirectMessages"
					component={DirectMessages}
					options={{
						presentation: "modal",
						animationTypeForReplace: "push",
						animation: "slide_from_right",
					}}
				/>

				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Post" component={PostImage} />
				<Stack.Screen name="Notifications" component={NotificationScreen} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="EditProfile" component={EditProfile} options={{}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
