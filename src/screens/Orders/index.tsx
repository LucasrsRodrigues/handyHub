import React, { useState } from "react";

import { Button, HStack, VStack } from "@components/base";
import { useTheme } from "styled-components/native";
import { InternalWrapper } from "@components/InternalWrapper";
import { Upcoming } from "./sections/Upcoming";
import { History } from "./sections/History";
import { Draft } from "./sections/Draft";

const step = {
	Upcoming: <Upcoming />,
	History: <History />,
	Draft: <Draft />,
};

export function Orders() {
	const theme = useTheme();
	const [seletedBookingType, setSelectedBookingType] = useState("Upcoming");

	return (
		<InternalWrapper title="Bookings" goBackTo="Home">
			<VStack flex={1}>
				<HStack>
					<Button
						label="Upcoming"
						type={seletedBookingType === "Upcoming" ? "default" : "outline"}
						tintColor={
							seletedBookingType === "Upcoming"
								? theme.colors.white
								: theme.colors.grey_50
						}
						onPress={() => setSelectedBookingType("Upcoming")}
						activeOpacity={0.8}
					/>

					<Button
						label="History"
						type={seletedBookingType === "History" ? "default" : "outline"}
						tintColor={
							seletedBookingType === "History"
								? theme.colors.white
								: theme.colors.grey_50
						}
						onPress={() => setSelectedBookingType("History")}
						activeOpacity={0.8}
					/>

					<Button
						label="Draft"
						type={seletedBookingType === "Draft" ? "default" : "outline"}
						tintColor={
							seletedBookingType === "Draft"
								? theme.colors.white
								: theme.colors.grey_50
						}
						onPress={() => setSelectedBookingType("Draft")}
						activeOpacity={0.8}
					/>
				</HStack>

				{step[seletedBookingType]}
			</VStack>
		</InternalWrapper>
	);
}
