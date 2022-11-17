import React from "react";
import { COLORS } from "../constants/theme";
import Home from "../screens/Home/Home";
import Posts from "../screens/Posts/Posts";
import NewPost from "../screens/NewPost/NewPost";
import Profile from "../screens/Profile/Profile";
import LikedPost from "../screens/LikedPost/LikedPost";
import HomeIcon from "../assets/icons/home";
import HomeIconOutlined from "../assets/icons/homeOutlined";
import HeartIcon from "../assets/icons/heart";
import LikeIconOutlined from "../assets/icons/likesOutlined";
import NewIcon from "../assets/icons/new";
import NewIconOutlined from "../assets/icons/newOutlined";
import ProfileIcon from "../assets/icons/profile";
import ProfileIconOutlined from "../assets/icons/profileOutlined";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
	const IconInTab = ({ name }) => {
		switch (name) {
			case "home":
				return <HomeIcon />;
			case "homeOulined":
				return <HomeIconOutlined />;
			case "likes":
				return <HeartIcon />;
			case "likesOulined":
				return <LikeIconOutlined />;
			case "newPost":
				return <NewIcon />;
			case "newPostOutlined":
				return <NewIconOutlined />;
			case "profile":
				return <ProfileIcon />;
			case "profileOutlined":
				return <ProfileIconOutlined />;
			default:
				break;
		}
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: COLORS.navback,
					borderRadius: 50,
					bottom: 15,
					position: "absolute",
					left: 20,
					right: 20,
					height: 60,
					flex: 1,
					shadowColor: "#171717",
					shadowOffset: { width: -2, height: 4 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused ? "homeOulined" : "home";
					} else if (route.name === "New") {
						iconName = focused ? "newPostOutlined" : "newPost";
					} else if (route.name === "Liked") {
						iconName = focused ? "likesOulined" : "likes";
					} else if (route.name === "Profile") {
						iconName = focused ? "profileOutlined" : "profile";
					}

					return <IconInTab name={iconName} />;
				},
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			{/* <Tab.Screen
                name="Message"
                options={{ headerShown: false }} 
                component={Posts}
            /> */}
			<Tab.Screen
				name="New"
				options={{ headerShown: false }}
				component={NewPost}
			/>
			<Tab.Screen
				name="Liked"
				options={{ headerShown: false }}
				component={LikedPost}
			/>
			<Tab.Screen
				name="Profile"
				options={{ headerShown: false }}
				component={Profile}
			/>
		</Tab.Navigator>
	);
};
