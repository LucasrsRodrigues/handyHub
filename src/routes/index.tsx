import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import UnsafeNavigation from "./unsafe.routes";
import SafeNavigation from "./safe.routes";

export function Routes() {
	const userIsLoggedIn = true;

	return (
		<NavigationContainer>
			{userIsLoggedIn ? <SafeNavigation /> : <UnsafeNavigation />}
		</NavigationContainer>
	);
}
