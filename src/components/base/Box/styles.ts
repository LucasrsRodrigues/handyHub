import styled from "styled-components/native";
import type { IBoxProps } from "./box";

import {
	color,
	space,
	layout,
	border,
	flexbox,
	position,
	shadow,
} from "styled-system";

export const Container = styled.TouchableOpacity<IBoxProps>`
  ${color};
  ${space};
  ${layout};
  ${border};
  ${flexbox};
  ${position};
  ${shadow};
`;
