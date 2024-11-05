import React from "react";
import { useTheme } from "styled-components/native";

import { Box, VStack, HStack, Heading, Text } from "@components/base";
import { ServiceSVGIcon } from "@components/serviceSVGIcon";

import SupremeIcon from "@assets/supreme-icon.svg";
import CalendarIcon from "@assets/icons/bold/Calender.svg";
import CallIcon from "@assets/icons/bold/Call.svg";
import MessageIcon from "@assets/icons/bold/Message-1.svg";

export function UpcomingItem() {
	const theme = useTheme();

	return (
		<Box
			backgroundColor={theme.colors.background}
			width="100%"
			padding={15}
			borderRadius={25}
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
								AC Regular Service
							</Heading>

							<Text weight="regular" color={theme.colors.grey_50}>
								1 Ton-1.5 Ton x3
							</Text>
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
					<Text weight="semibold" variant="large">
						Status
					</Text>

					<Box
						// padding="4px"
						paddingY="4px"
						paddingX={10}
						backgroundColor={theme.colors.success}
						borderRadius={100}
					>
						<Text variant="small" weight="medium" color={theme.colors.white}>
							Confirmed
						</Text>
					</Box>
				</HStack>

				<HStack
					backgroundColor={theme.colors.white}
					padding={12}
					borderRadius={15}
					spacing={10}
				>
					<Box
						width={50}
						height={50}
						backgroundColor={theme.colors.white}
						borderRadius={25}
						justifyContent="center"
						alignItems="center"
					>
						<SupremeIcon />
					</Box>

					<VStack flex={1}>
						<Text variant="large" weight="semibold">
							Supreme Service
						</Text>

						<Text variant="small" weight="regular" color={theme.colors.grey_50}>
							Service Provider
						</Text>
					</VStack>

					<HStack spacing={8}>
						<Box
							width={36}
							height={36}
							borderRadius={18}
							backgroundColor="#F5F5F5"
							justifyContent="center"
							alignItems="center"
						>
							<MessageIcon fill={theme.colors.black} />
						</Box>

						<Box
							width={36}
							height={36}
							borderRadius={18}
							backgroundColor="#F5F5F5"
							justifyContent="center"
							alignItems="center"
						>
							<CallIcon fill={theme.colors.black} />
						</Box>
					</HStack>
				</HStack>

				<HStack
					backgroundColor={theme.colors.white}
					padding={12}
					borderRadius={15}
					spacing={10}
				>
					<Box
						width={50}
						height={50}
						backgroundColor="#F5F5F5"
						borderRadius={25}
						alignItems="center"
						justifyContent="center"
					>
						<CalendarIcon fill={theme.colors.black} />
					</Box>

					<VStack>
						<Text variant="large" weight="semibold">
							AC Regular Service
						</Text>

						<Text variant="small" weight="regular" color={theme.colors.grey_50}>
							Tomorrow, 10:00-11:00 Am
						</Text>
					</VStack>
				</HStack>
			</VStack>
		</Box>
	);
}
