import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "@screens/SignIn";
import { Onboarding } from "@screens/Onboarding";
import { SignUp } from "@screens/SignUp";
import { VerificationCode } from "@screens/VerificationCode";

const { Navigator, Screen } = createStackNavigator();

export default function UnsafeNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="VerificationCode" component={VerificationCode} />
    </Navigator>
  )
}