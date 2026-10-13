import { useContext } from 'react';
import { ThemeContext } from './themeContextInstance';

export const useTheme = () => useContext(ThemeContext);
