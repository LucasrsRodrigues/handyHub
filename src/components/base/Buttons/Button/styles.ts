import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native/dist/types";

const variantsSize = (theme: DefaultTheme, variant = "medium") => ({
  "small": css`
    padding: 4px 10px;
  `,
  "medium": css`
    padding: 13px 30px;
  `,
  "big": css`
    padding: 13px 50px;
  `,
}[variant]);

const colorVariant = (theme: DefaultTheme, variant = "main") => ({
  "black": css`
    background: ${theme.colors.black};
  `,
  "main": css`
    background: ${theme.colors.main};
  `,
  "gray": css`
    background: ${theme.colors.grey_90};
  `,

}[variant]);

const typeVariant = (theme: DefaultTheme, variant = "default") => ({
  "default": css`
    border-radius: 45px;
  `,
  "outline": css`
    width: auto;
    background-color: transparent;
    padding: 0;
  `,
}[variant]);

export default interface IRNButtonProps {
  size?: "small" | "medium" | "big" | "outline";
  color?: "black" | "main" | "gray";
  type?: "outline" | "default";
}

export const Button = styled.TouchableOpacity<IRNButtonProps>`
  /* width: 100%; */
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme, size }) => variantsSize(theme, size)};
  ${({ theme, color, disabled }) => colorVariant(theme, disabled ? "gray" : color)};
  ${({ theme, type }) => typeVariant(theme, type)};

`;