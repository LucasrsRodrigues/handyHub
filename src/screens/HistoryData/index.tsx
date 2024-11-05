import React from "react";
import { useTheme } from "styled-components/native";

import { Box, Button, Heading, HStack, Text, VStack } from "@components/base";
import { InternalWrapper } from "@components/InternalWrapper";
import { ServiceSVGIcon } from "@components/serviceSVGIcon";
import ArrowLeft from "@assets/icons/outline/Right 2.svg";

import * as S from "./styles";

const options = [
	{
		id: "0",
		label: "Date and Time",
	},
	{
		id: "1",
		label: "Address",
	},
	{
		id: "2",
		label: "Phone Number",
	},
	{
		id: "3",
		label: "Promo Code",
	},
];

export function HistoryData() {
	const theme = useTheme();

	return (
		<InternalWrapper title="History Details" goBackTo="Orders">
			<VStack spacing={20} marginBottom={20}>
				<HStack spacing={5}>
					<Text color={theme?.colors?.grey_50}>Reference Code:</Text>
					<Text weight="semibold">#D-654321</Text>
				</HStack>

				<Box
					height={1}
					width="100%"
					borderWidth={0.5}
					borderStyle="dashed"
					borderColor={theme.colors.grey_50}
				/>

				<Box
					backgroundColor={theme.colors.background}
					width="100%"
					padding={15}
					borderRadius={25}
				>
					<VStack spacing={15}>
						<HStack>
							<Text weight="semibold" variant="large">
								Service Provider
							</Text>
						</HStack>

						<HStack spacing={12}>
							<Box
								width={70}
								height={70}
								backgroundColor={theme?.colors?.white}
								borderRadius={35}
								justifyContent="center"
								alignItems="center"
							>
								<ServiceSVGIcon service="supreme_icon" />
							</Box>

							<VStack>
								<Heading variant="heading4" weight="semibold">
									Supreme Service
								</Heading>

								<Text color={theme?.colors?.grey_50}>Service Provider</Text>
							</VStack>
						</HStack>
					</VStack>
				</Box>

				<Box
					backgroundColor={theme.colors.background}
					width="100%"
					padding={15}
					borderRadius={25}
				>
					<VStack spacing={15}>
						<HStack>
							<Text weight="semibold" variant="large">
								Service Provider
							</Text>
						</HStack>

						<HStack spacing={12}>
							<Box
								width={70}
								height={70}
								backgroundColor={theme?.colors?.white}
								borderRadius={35}
								justifyContent="center"
								alignItems="center"
							>
								<ServiceSVGIcon service="ac_repair_icon" />
							</Box>

							<VStack>
								<Heading variant="heading4" weight="semibold">
									Supreme Service
								</Heading>

								<Text color={theme?.colors?.grey_50}>Service Provider</Text>
							</VStack>
						</HStack>
					</VStack>
				</Box>

				{options.map((option) => (
					<S.OptionButton key={option?.id}>
						<HStack justifyContent="space-between">
							<Text variant="large" weight="semibold">
								{option?.label}
							</Text>

							<ArrowLeft fill={theme?.colors?.black} />
						</HStack>

						<Box
							height={1}
							width="100%"
							borderWidth={0.5}
							borderStyle="dashed"
							borderColor={theme.colors.grey_50}
						/>
					</S.OptionButton>
				))}
			</VStack>

			<Button label="Re-Order" tintColor={theme?.colors?.white} />
		</InternalWrapper>
	);
}
