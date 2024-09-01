import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import TabNavigation from "./tab.routes";
import UnsafeNavigation from "./unsafe.routes";

export function Routes() {
  const userIsLoggedIn = true;

  return (
    <NavigationContainer>
      {userIsLoggedIn ? <TabNavigation /> : <UnsafeNavigation />}
    </NavigationContainer>
  )
}