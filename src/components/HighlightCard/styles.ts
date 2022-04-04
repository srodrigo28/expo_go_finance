import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import theme from '../../styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${( theme.colors.secondary )};

    width: ${RFValue(300)}px;
    height: ${RFValue(220)}px;
    margin-right: 17px;

    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-family: ${( theme.fonts.bold )};
    font-size: ${RFValue(14)}px;
    color: ${(theme.colors.text_dark)};

`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: ${(theme.colors.success)};
`;
export const Footer = styled.View``;
export const Amount = styled.Text`
    font-family: ${( theme.fonts.medium )};
    font-size: ${RFValue(32)}px;
    color: ${(theme.colors.text_dark)};
    margin-top: 38px;

    
`;
export const LastTransaction = styled.Text`
    font-family: ${( theme.fonts.regular )};
    font-size: ${RFValue(12)}px;
    color: ${(theme.colors.text)};
`;