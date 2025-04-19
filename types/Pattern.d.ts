import { CSSProperties } from "react";

// Define pattern variants
type PatternVariant = "dots" | "waves" | "stripes" | "sunburst" | "grid" | "stars";

// Define color themes
// type ColorTheme = "light" | "dark" | "custom";

// Define pattern sizes
type PatternSize = "small" | "medium" | "large";

// Define border radius options
type BorderRadiusType = "none" | "small" | "medium" | "large" | "full";

// Define animation options
type AnimationType = "none" | "pulse" | "spin" | "bounce" | "fade";


// Define color object
interface PatternColor {
  background: string;
  foreground: string;
}

export interface PatternProps {

  /**
   * Pattern variant
   * @default "dots"
   */
  variant?: PatternVariant;

  /**
   * Colors for the pattern
   * @default { background: "#e5e5f7", foreground: "#444cf7" }
   */
  color?: PatternColor;

  /**
   * Size of the pattern
   * @default "medium"
   */
  size?: PatternSize;

  /**
   * Border radius variant
   * @default "none"
   */
  borderRadius?: BorderRadiusType;

  /**
   * Pattern opacity
   * @default 1
  */
  opacity?: number;
  
  /**
    * Animation variant
    * @default "none"
  */
  animation?: AnimationType;

  /**
   * Animation duration in seconds
   * @default 2
  */
  animationDuration?: number;

  /**
   * Pattern blur amount
   * @default 0
  */
  blur?: number;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: CSSProperties;

}

// Export constants for external use
interface PatternVariants {
    DOTS: "dots",
    WAVES: "waves",
    STRIPES: "stripes",
    GRID: "grid",
    STARS: "stars",
    SUNBURST: "sunburst",
}

interface PatternSizes {
  SMALL: "small";
  MEDIUM: "medium";
  LARGE: "large";
}

interface PatternColorThemes {
  LIGHT: "light";
  DARK: "dark";
  CUSTOM: "custom";
}

// Add new constants
interface PatternBorderRadius {
  NONE: "none";
  SMALL: "small";
  MEDIUM: "medium";
  LARGE: "large";
  FULL: "full";
}

interface PatternAnimations {
  NONE: "none";
  PULSE: "pulse";
  SPIN: "spin";
  BOUNCE: "bounce";
  FADE: "fade";
}

export const Pattern: React.FC<PatternProps> & {
  VARIANTS: PatternVariants;
  SIZES: PatternSizes;
  COLOR_THEMES: PatternColorThemes;
  BORDER_RADIUS: PatternBorderRadius;
  ANIMATIONS: PatternAnimations;
};

export default Pattern;