import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native/dist/types";

const variants = (theme: DefaultTheme, variants = 'heading1') => ({
  "heading1": css`
    font-size: 30px;
    line-height: 39.6px;
  `,
  "heading2": css`
    font-size: 24px;
    line-height: 32.4px;
  `,
  "heading3": css`
    font-size: 20px;
    line-height: 26px;
  `,
  "heading4": css`
    font-size: 18px;
    line-height: 25.2px;
  `,
}[variants]);

export default interface IRNHeadingProps {
  variant?: "heading1" | "heading2" | "heading3" | "heading4";
  color?: string;
  weight?: "regular" | "medium" | "semibold" | "bold";
}

export const HeadingContainer = styled.Text<IRNHeadingProps>`
  ${({ theme, variant }) => variants(theme, variant)};

  color: ${({ color }) => color};

  font-family: ${({ theme, weight }) => theme.fonts[weight!]};
`;