import React from "react";
import { useTheme } from "styled-components/native";

import { Box, VStack, HStack, Heading, Text } from "@components/base";
import { ServiceSVGIcon } from "@components/serviceSVGIcon";
import { useNavigation } from "@react-navigation/native";

export function HistoryItem() {
	const theme = useTheme();
	const { navigate } = useNavigation();
	return (
		<Box
			backgroundColor={theme.colors.background}
			width="100%"
			padding={15}
			borderRadius={25}
			onPress={() => navigate("HistoryData")}
		>
			<VStack spacing={10}>
				<VStack>
					<HStack spacing={12}>
						<Box
							width={70}
							height={70}
							backgroundColor={theme.colors.white}
							borderRadius={35}
							justifyContent="center"
							alignItems="center"
						>
							<ServiceSVGIcon service="ac_repair_icon" />
						</Box>

						<VStack spacing={4}>
							<Heading
								variant="heading4"
								weight="semibold"
								color={theme.colors.black}
							>
								Home Cleaning
							</Heading>

							<HStack>
								<Text weight="regular" color={theme.colors.grey_50}>
									Reference Code:
								</Text>
								<Text weight="regular" color={theme.colors.black}>
									{" "}
									#D-654321
								</Text>
							</HStack>
						</VStack>
					</HStack>

					<Box
						height={1}
						width="100%"
						borderWidth={0.5}
						borderStyle="dashed"
						borderColor={theme.colors.grey_50}
						marginTop={25}
					/>
				</VStack>

				<HStack justifyContent="space-between">
					<Text weight="regular" variant="medium" color={theme.colors.grey_50}>
						Status
					</Text>

					<Box
						// padding="4px"
						paddingY="4px"
						paddingX={10}
						backgroundColor={theme.colors.black}
						borderRadius={100}
					>
						<Text variant="small" weight="medium" color={theme.colors.white}>
							Complete
						</Text>
					</Box>
				</HStack>

				<HStack justifyContent="space-between">
					<Text weight="regular" variant="medium" color={theme.colors.grey_50}>
						Service Provider
					</Text>

					<Text weight="medium" variant="medium" color={theme.colors.black}>
						Supreme Service
					</Text>
				</HStack>

				<HStack justifyContent="space-between">
					<Text weight="regular" variant="medium" color={theme.colors.grey_50}>
						Schedule
					</Text>

					<Text weight="medium" variant="medium" color={theme.colors.black}>
						4 Nov, 10:00-11:00 Am
					</Text>
				</HStack>
			</VStack>
		</Box>
	);
}
