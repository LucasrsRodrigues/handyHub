// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import type { SvgProps } from "react-native-svg";
import ACRepairIcon from "@assets/services/AC Repair.svg";
import ApllianceIcon from "@assets/services/Appliance.svg";
import BathroomRemodelingIcon from "@assets/services/Bathroom remodeling.svg";
import BeautyIcon from "@assets/services/Beauty.svg";
import CarpetCleaningIcon from "@assets/services/Carpet cleaning.svg";
import CleaningIcon from "@assets/services/Cleaning.svg";
import ComputerRepairIcon from "@assets/services/Computer repair.svg";
import DishwasherRepairIcon from "@assets/services/Dishwasher repair.svg";
import ElectronicsIcon from "@assets/services/Electronics.svg";
import EventPlanningIcon from "@assets/services/Event planning.svg";
import FurnitureAssemblyIcon from "@assets/services/Furniture assembly.svg";
import KitchenRemodelingIcon from "@assets/services/Kitchen remodeling.svg";
import MensSalonIcon from "@assets/services/Men's Salon.svg";
import PaintingIcon from "@assets/services/Painting.svg";
import PlumbingIcon from "@assets/services/Plumbing.svg";
import RefrigeratorRepairIcon from "@assets/services/Refrigerator repair.svg";
import RoofRepairIcon from "@assets/services/Roof repair.svg";
import ShiftingOneIcon from "@assets/services/Shifting-1.svg";
import ShiftingIcon from "@assets/services/Shifting.svg";
import WindowCleanerIcon from "@assets/services/Window cleaner.svg";
import SupremeIcon from "@assets/supreme-icon.svg";

const servicesIcon: Record<string, React.FC<SvgProps>> = {
	ac_repair_icon: ACRepairIcon,
	appliance_icon: ApllianceIcon,
	bathroom_remodeling_icon: BathroomRemodelingIcon,
	beauty_icon: BeautyIcon,
	carpet_cleaning_icon: CarpetCleaningIcon,
	cleaning_icon: CleaningIcon,
	computer_repair_icon: ComputerRepairIcon,
	dishwasher_repair_icon: DishwasherRepairIcon,
	electronics_icon: ElectronicsIcon,
	event_planning_icon: EventPlanningIcon,
	furniture_assembly_icon: FurnitureAssemblyIcon,
	kitchen_remodeling_icon: KitchenRemodelingIcon,
	mens_salon_icon: MensSalonIcon,
	painting_icon: PaintingIcon,
	plumbing_icon: PlumbingIcon,
	refrigerator_repair_icon: RefrigeratorRepairIcon,
	roof_repair_icon: RoofRepairIcon,
	shifting_one_icon: ShiftingOneIcon,
	shifting_icon: ShiftingIcon,
	window_cleaner_icon: WindowCleanerIcon,
	supreme_icon: SupremeIcon,
};

interface IServiceSVGIconProps extends SvgProps {
	service: keyof typeof servicesIcon;
}

export function ServiceSVGIcon({ service, ...rest }: IServiceSVGIconProps) {
	const IconComponent = servicesIcon[service];

	return <IconComponent {...rest} />;
}
