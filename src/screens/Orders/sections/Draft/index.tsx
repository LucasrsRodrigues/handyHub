import React from "react";

import { VStack, Heading, Text } from "@components/base";
import { useTheme } from "styled-components";
import NounWishListIcon from "@assets/noun-wish-list.svg";
import { DraftItem } from "@components/DraftItem";

const drafts = [
	{
		id: "0",
	},
	{
		id: "1",
	},
	{
		id: "2",
	},
];

export function Draft() {
	const theme = useTheme();
	drafts.length === 0 && (
		<VStack justifyContent="center" alignItems="center" spacing={30} flex={1}>
			<NounWishListIcon fill={theme.colors.grey_60} />

			<VStack justifyContent="center" alignItems="center" spacing={8}>
				<Heading variant="heading4" weight="semibold">
					You have No Draft
				</Heading>

				<Text weight="medium" color={theme.colors.grey_50} textAlign="center">
					Currently you don’t have any upcoming order.{"\n"}
					Place and track your orders from here.
				</Text>
			</VStack>
		</VStack>
	);

	return (
		<VStack spacing={30} marginTop={30}>
			<DraftItem />
			<DraftItem />
		</VStack>
	);
}
