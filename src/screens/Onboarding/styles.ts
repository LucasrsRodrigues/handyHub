import styled from "styled-components/native";
interface IContainerProps {
  background: string;
}
export const Container = styled.View<IContainerProps>`
  position: relative;
  flex: 1;
  background: ${({ background }) => background};

`;



export const OnboardingMessage = styled.View`
  position: absolute;
  bottom: 0;
  background: #FFFFFF;

  padding: 40px 24px 20px;
  width: 100%;
  height: 320px;
  border-radius: 40px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 43px;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 45px;
  text-align: center;
  justify-content: center;
  text-align: center;

  margin-top: 29px;
`;