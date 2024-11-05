import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import HomeIconOutline from "@assets/icons/outline/Home 2.svg";
import HomeIconBold from "@assets/icons/bold/Home 2.svg";

import DocumentIconOutline from "@assets/icons/outline/Document.svg";
import DocumentIconBold from "@assets/icons/bold/Document.svg";

import NotificationIconOutline from "@assets/icons/outline/Notification 1.svg";
import NotificationIconBold from "@assets/icons/bold/Notification 1.svg";

import MessageIconOutline from "@assets/icons/outline/Message-1.svg";
import MessageIconBold from "@assets/icons/bold/Message-1.svg";

import ProfileIconOutline from "@assets/icons/outline/Profile.svg";
import ProfileIconBold from "@assets/icons/bold/Profile.svg";


import { Orders } from "@screens/Orders";
import { Chat } from "@screens/Chat";
import { Notification } from "@screens/Notification";
import { Profile } from "@screens/Profile";
import { Home } from "@screens/Home";


const { Navigator, Screen } = createBottomTabNavigator();

const optionsMenu = [
  {
    id: "0",
    name: "Home",
    component: Home,
    icon_outline: HomeIconOutline,
    icon_bold: HomeIconBold,
  },
  {
    id: "1",
    name: "Orders",
    component: Orders,
    icon_outline: DocumentIconOutline,
    icon_bold: DocumentIconBold,
    isHidden: false,
  },
  {
    id: "2",
    name: "Notification",
    component: Notification,
    icon_outline: NotificationIconOutline,
    icon_bold: NotificationIconBold,
  },
  {
    id: "3",
    name: "Chat",
    component: Chat,
    icon_outline: MessageIconOutline,
    icon_bold: MessageIconBold,
  },
  {

    id: "4",
    name: "Profile",
    component: Profile,
    icon_outline: ProfileIconOutline,
    icon_bold: ProfileIconBold,
  },
]

export default function TabNavigation() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 15,
          backgroundColor: "#040404",
          borderRadius: 40,
          height: 56,
          overflow: "hidden",
        }
      }}

    >
      {optionsMenu.map(item => (
        <Screen
          key={item.id}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  position: "absolute",
                  top: "50%"
                }}
              >
                {focused ? (
                  <item.icon_bold
                    width={24}
                    height={24}
                    fill="#ffffff"
                  />
                ) : (
                  <item.icon_outline
                    width={24}
                    height={24}
                    fill="#ffffff"
                  />
                )}

                {focused ? (
                  <View
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                      bottom: "-90%"
                    }}
                  >
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#B0E0E6",
                      }}
                    />
                  </View>
                ) : null}
              </View>
            ),
          }}
        />
      ))}

    </Navigator>
  )
}