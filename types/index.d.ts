// Type definitions for lebify-ui
// Project: https://github.com/lebify-ui
// Definitions by: Your Name <https://github.com/yourusername>

import { ReactNode, MouseEventHandler } from 'react';

// Button Component
export interface ButtonProps {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Button visual style variant
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'basic' |
  'cedar' | 'cedar-light' | 'cedar-dark' |
  'sea' | 'coast' | 'azure' |
  'stone' | 'earth' | 'terracotta' |
  'urban' | 'concrete' | 'steel' |
  'olive' | 'saffron' | 'grape' |
  'festive' | 'celebration' | 'heritage' |
  'copper' | 'silver' | 'ceramic' |
  'tech' | 'digital' | 'startup';

  /**
   * Button type (filled, outlined, ghost)
   * @default "filled"
   */
  buttonType?: 'filled' | 'outlined' | 'ghost';

  /**
   * Button size
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Custom styles
   */
  style?: React.CSSProperties;

  /**
   * Hover effect style
   * @default "default"
   */
  hoverEffect?: 'default' | 'grow' | 'shrink' | 'float' | 'sink' | 'pulse' | 'glow';

  /**
   * Icon to display in the button
   */
  icon?: ReactNode;

  /**
   * Position of the icon
   * @default "left"
   */
  iconPosition?: 'left' | 'right';

  /**
   * Whether the button should only display an icon
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Spacing between icon and text
   * @default "0.5rem"
   */
  iconSpacing?: string;

  /**
   * Additional CSS class names for the icon
   */
  iconClassName?: string;

  /**
   * Custom styles for the icon
   */
  iconStyle?: React.CSSProperties;

  /**
   * Tooltip content
   */
  tooltip?: ReactNode;

  /**
   * Position of the tooltip
   * @default "top"
   */
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Delay before showing tooltip (ms)
   * @default 300
   */
  tooltipDelay?: number;

  /**
   * Additional CSS class names for the tooltip
   */
  tooltipClassName?: string;

  /**
   * Custom styles for the tooltip
   */
  tooltipStyle?: React.CSSProperties;

  /**
   * Theme for the tooltip
   * @default "default"
   */
  tooltipTheme?: 'default' | 'light' | 'dark';

  /**
   * Border radius style
   * @default "medium"
   */
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'pill' | 'rounded';

  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Text to display during loading
   */
  loadingText?: string;

  /**
   * Type of loading spinner
   * @default "circle"
   */
  loadingSpinner?: 'circle' | 'dots' | 'pulse' | 'bars' | 'ellipsis';

  /**
   * Position of the loading spinner
   * @default "left"
   */
  loadingPosition?: 'left' | 'right';

  /**
   * Whether to hide text when loading
   * @default false
   */
  hideTextWhenLoading?: boolean;
}

export declare const Button: React.FC<ButtonProps>;

// ThemeProvider Component
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

export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;

// AppContainer Component
export interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

export declare const AppContainer: React.FC<AppContainerProps>;

// Add future component types here as you develop them
// For example:

/*
export interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  elevated?: boolean;
}

export declare const Card: React.FC<CardProps>;
*/

export { default as Button, ButtonProps } from './Button';
export { default as ThemeProvider, ThemeProviderProps, ThemeContextType, useTheme } from './ThemeProvider';
