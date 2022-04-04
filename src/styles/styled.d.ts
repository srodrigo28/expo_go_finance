import 'styled-components';
import theme from './theme';

declare module 'styled-components'{
    type ThmeType = typeof theme

    export interface DefaultTheme extends ThmeType{}
}