import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native/dist/types";

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

export default interface IRNTextProps {
  variant?: "large" | "medium" | "small" | "xsmall";
  color?: string;
  weight?: "regular" | "medium" | "semibold" | "bold";
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

export const TextContainer = styled.Text<IRNTextProps>`
  ${({ theme, variant }) => variants(theme, variant)};

  color: ${({ color }) => color};

  font-family: ${({ theme, weight }) => theme.fonts[weight!]};
  text-align: ${({ textAlign }) => textAlign};
`;