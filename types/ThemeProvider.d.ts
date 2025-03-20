import { ReactNode } from 'react';

export interface AutoThemeMap {
    day: string;
    night: string;
}

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: string;
    storageKey?: string;
    autoTheme?: boolean;
    morningHour?: number;
    eveningHour?: number;
    themes?: string[];
    autoThemeMap?: AutoThemeMap;
}

export interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    toggleTheme: () => void;
    autoTheme: boolean;
    setAutoTheme: (auto: boolean) => void;
    availableThemes: string[];
}

export declare const useTheme: () => ThemeContextType;

declare const ThemeProvider: React.FC<ThemeProviderProps>;

export default ThemeProvider; 