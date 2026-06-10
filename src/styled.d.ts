import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    accent: string;
    navBg: string;
    mutedText: string;
  }
}