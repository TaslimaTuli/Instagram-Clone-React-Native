import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, PermissionsAndroid, Platform, Alert, ActivityIndicator, StatusBar } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { useNavigation } from "@react-navigation/native";

export default function PostImage() {
	const navigation = useNavigation();
	const [gallery, setGallery] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedImages, setSelectedImages] = useState([]);
	const [previewImage, setPreviewImage] = useState(null);

	useEffect(() => {
		if (Platform.OS === "android") {
			requestAndroidPermission().then((granted) => {
				if (granted) {
					fetchGalleryImages();
				} else {
					Alert.alert("Permission Denied", "Please allow access to photos to use this feature.");
					setLoading(false);
				}
			});
		} else {
			fetchGalleryImages();
		}
	}, []);

	const requestAndroidPermission = async () => {
		const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
		const hasPermission = await PermissionsAndroid.check(permission);
		if (hasPermission) {
			return true;
		}
		const status = await PermissionsAndroid.request(permission);
		return status === PermissionsAndroid.RESULTS.GRANTED;
	};

	const fetchGalleryImages = async () => {
		try {
			const photos = await CameraRoll.getPhotos({ first: 15, assetType: "Photos" });
			if (photos && photos.edges) {
				setGallery(photos.edges.map((edge) => edge.node.image.uri));
				setPreviewImage(photos.edges[0].node.image.uri);
			}
			setLoading(false);
		} catch (error) {
			console.error("Error fetching gallery images: ", error);
			Alert.alert("Error", "Failed to fetch gallery images.");
			setLoading(false);
		}
	};

	const selectImage = (uri) => {
		setPreviewImage(uri);
		if (selectedImages.includes(uri)) {
			setSelectedImages(selectedImages.filter((image) => image !== uri));
		} else {
			setSelectedImages([...selectedImages, uri]);
		}
	};

	const handleNext = () => {
		if (selectedImages.length > 0) {
			Alert.alert("Selected Images", selectedImages.join("\n"));
		} else {
			Alert.alert("No image selected", "Please select at least one image.");
		}
	};

	if (loading) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<View className="bg-gray-50 flex-1 pb-2">
			<StatusBar barStyle="dark-content" backgroundColor="rgb(249 250 251)" translucent={true} />
			<View className="flex-1 bg-gray-100 my-8 mx-2">
				<TouchableOpacity className="absolute top-3 left-2" onPress={() => navigation.goBack()}>
					<Text className="font-semibold text-lg text-gray-700">Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity className="absolute top-3 right-2" onPress={handleNext}>
					<Text className="font-semibold text-lg text-gray-700">Next</Text>
				</TouchableOpacity>
			</View>

			<View className="items-center mt-2 justify-center h-1/2 bg-gray-50">
				{previewImage ? (
					<Image source={{ uri: previewImage }} className="w-full h-full" resizeMode="center" />
				) : (
					<Text className="text-gray-500 text-lg">No image selected</Text>
				)}
			</View>

			<ScrollView className="mt-2">
				<View className="flex-row flex-wrap items-center justify-center">
					{gallery.map((uri, index) => (
						<TouchableOpacity key={index} onPress={() => selectImage(uri)}>
							<Image
								source={{ uri }}
								className={`w-28 h-28 m-1 ${selectedImages.includes(uri) ? "border-2 border-green-500" : "border border-gray-300"}`}
							/>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>

			<View className="flex-row justify-around p-2">
				<TouchableOpacity>
					<Text className="text-lg text-gray-700 font-semibold">Library</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text className="text-lg text-gray-700 font-semibold">Photo</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text className="text-lg text-gray-700 font-semibold">Video</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
