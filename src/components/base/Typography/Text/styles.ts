import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native/dist/types";
import IRNTextProps from "./text";
import { color, layout, space, typography } from "styled-system";

const variants = (theme: DefaultTheme, variants = 'medium') => ({
  "large": css`
    font-size: 16px;
    line-height: 22.4px;
  `,
  "medium": css`
    font-size: 14px;
    line-height: 19.6px;
  `,
  "small": css`
    font-size: 12px;
    line-height: 18px;
  `,
  "xsmall": css`
    font-size: 8px;
    line-height: 12px;
  `,
}[variants]);

export const TextContainer = styled.Text<IRNTextProps>`
  ${color};
  ${space};
  ${typography};
  ${layout};

  ${({ theme, variant }) => variants(theme, variant)};
  font-family: ${({ theme, weight }) => theme.fonts[weight!]};
  text-align: ${({ textAlign }) => textAlign};
`;