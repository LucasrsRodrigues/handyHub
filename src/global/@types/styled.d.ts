import defaultStyle from '@global/styles/default.style';
import 'styled-components/native';


declare module 'styled-components/native' {
  type ThemeType = typeof defaultStyle;

  export interface DefaultTheme extends ThemeType { }
}