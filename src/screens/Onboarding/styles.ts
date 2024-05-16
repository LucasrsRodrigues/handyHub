import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  flex: 1;
  background: #D9CED4;
`;

export const OnboardingMessage = styled.View`
  position: absolute;
  bottom: 0;
  padding: 40px 24px 20px;
  background: #ffffff;
  width: 100%;
  height: 272px;
  border-radius: 40px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 45px;
  text-align: center;
  justify-content: center;
  text-align: center;
`;