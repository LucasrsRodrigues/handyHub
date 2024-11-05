import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./tab.routes";
import { HistoryData } from "@screens/HistoryData";

const { Navigator, Screen } = createStackNavigator();

export default function SafeNavigation() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Dashboard" component={TabNavigation} />
			<Screen name="HistoryData" component={HistoryData} />
		</Navigator>
	);
}
