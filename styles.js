import styled from "styled-components/native";
import { List } from "native-base";

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

export const ItemTitleStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const DetailWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const DetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;

export const DetailDescriptionStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: hsla(191, 23%, 50%, 0.7);
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 3px 10px #000;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 22px;
  font-weight: bold;
  background-color: darkblue;
  overflow: hidden;
  color: white;
  border-radius: 5px;
  padding: 10px;
  :focus {
    background-color: lightblue;
  }
`;
