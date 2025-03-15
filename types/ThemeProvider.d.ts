import { ReactNode } from 'react';

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: 'light' | 'dark';
    storageKey?: string;
}

export interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    toggleTheme: () => void;
}

export declare const useTheme: () => ThemeContextType;

declare const ThemeProvider: React.FC<ThemeProviderProps>;

export default ThemeProvider; 