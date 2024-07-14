import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert, Platform, PermissionsAndroid, StatusBar, BackHandler } from "react-native";
import { Camera, getCameraDevice, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { useNavigation } from "@react-navigation/native";

import ShotButton from "../../assets/Header/Camera/ShotButton.svg";
import BackButton from "../../assets/Header/Camera/Back.svg";
import ChangeCamera from "../../assets/Header/Camera/ChangeCamera.svg";

export default function CameraScreen() {
	const navigation = useNavigation();
	// const device = useCameraDevice("back"); // Use the back camera device
	const devices = Camera.getAvailableCameraDevices(); // Get available camera devices
	const [device, setDevice] = useState(getCameraDevice(devices, "back")); // State to store the currently selected camera device

	const { hasPermission } = useCameraPermission(); // Check if the camera permission is granted
	const camera = useRef(null);
	const [imageData, setImageData] = useState(null); // State to store the image data
	const [takingPicture, setTakingPicture] = useState(false); // State to track if the picture is being taken

	// Display message if camera permission is not granted
	if (!hasPermission) return <Text>No camera permission</Text>;
	// Display message if no camera device is found
	if (!device) return <Text>No camera device found</Text>;

	// Function to take a picture
	const takePicture = async () => {
		if (camera.current && !takingPicture) {
			setTakingPicture(true);
			const photo = await camera.current.takePhoto();
			setImageData(photo.path);
		}
	};

	// Function to check and request Files and media permission
	async function hasAndroidPermission() {
		const getCheckPermissionPromise = () => {
			if (Platform.Version >= 33) {
				return Promise.all([
					PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
					PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
				]).then(([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) => hasReadMediaImagesPermission && hasReadMediaVideoPermission);
			} else {
				return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
			}
		};

		const hasPermission = await getCheckPermissionPromise();
		if (hasPermission) {
			return true;
		}
		const getRequestPermissionPromise = () => {
			if (Platform.Version >= 33) {
				return PermissionsAndroid.requestMultiple([
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
				]).then(
					(statuses) =>
						statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] === PermissionsAndroid.RESULTS.GRANTED &&
						statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] === PermissionsAndroid.RESULTS.GRANTED
				);
			} else {
				return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(
					(status) => status === PermissionsAndroid.RESULTS.GRANTED
				);
			}
		};

		return await getRequestPermissionPromise();
	}

	// Function to save the picture to the camera roll
	async function savePicture() {
		if (Platform.OS === "android" && !(await hasAndroidPermission())) {
			return;
		}
		try {
			await CameraRoll.save(`file://${imageData}`, { type: "photo", album: "Camera" });
			Alert.alert("Success", "Image saved to Camera Roll!");
			resetCamera();
		} catch (error) {
			Alert.alert("Error", "Failed to save image.");
		}
	}

	// Function to reset the camera state
	const resetCamera = () => {
		setTakingPicture(false);
		setImageData(null);
	};

	// Function to toggle between front and back cameras
	const toggleCamera = () => {
		const position = device?.position == "front" ? "back" : "front";
		setDevice(getCameraDevice(devices, position));
	};

	return (
		<View className="flex-1">
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

			{!imageData && (
				<View className="flex-1">
					<Camera ref={camera} className="flex-1" device={device} isActive={true} photo />
					<TouchableOpacity className="absolute top-16 self-start pl-8" onPress={toggleCamera} disabled={takingPicture}>
						<ChangeCamera />
					</TouchableOpacity>
					<TouchableOpacity className="absolute top-16 self-end pr-8" onPress={() => navigation.navigate("Home")} disabled={takingPicture}>
						<BackButton />
					</TouchableOpacity>
					<TouchableOpacity className="absolute bottom-16 self-center" onPress={takePicture} disabled={takingPicture}>
						<ShotButton />
					</TouchableOpacity>
				</View>
			)}
			{/* Show Picture */}
			{imageData && (
				<View className="flex-1 items-center justify-center">
					<Image source={{ uri: "file://" + imageData }} className="mb-10 w-11/12 h-3/4" />
					<View className="flex-row justify-around w-full">
						<TouchableOpacity
							style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}
							onPress={savePicture}
						>
							<Text className="text-white  text-lg font-semibold">Save Image</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}
							onPress={resetCamera}
						>
							<Text className="text-white  text-lg font-semibold">Retake</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}
