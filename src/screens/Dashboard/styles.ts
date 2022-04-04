import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'
import theme from "../../styles/theme";


export const Container = styled.View`
    flex: 1;
    background-color: ${( theme.colors.background )};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${( theme.colors.primary)};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const UserWrapper = styled.View`
    width: 100%;

    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;
export const User = styled.View`
    margin-left: 17px;

`;
export const UserGreeting = styled.Text`
    color: ${theme.colors.background};
    font-size: ${RFValue(18)}px;
    font-family: ${(theme.fonts.regular)};
`;
export const UserName = styled.Text`
    color: ${theme.colors.background};
    font-size: ${RFValue(18)}px;
    font-family: ${(theme.fonts.bold)};
`;

export const Icon = styled(Feather)`
    color: ${ (theme.colors.secondary)};
    font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: true,
    contentContainerStyle:{ paddingHorizontal: 24}
})`

`;