import { ReactNode, CSSProperties } from 'react';

// Define badge color types
type BasicColor = 'primary' | 'secondary' | 'basic' | 'normal';
type StatusColor = 'success' | 'warning' | 'info' | 'error';
type CedarColor = 'cedar' | 'cedar-light' | 'cedar-dark';
type MediterraneanColor = 'sea' | 'coast' | 'azure';
type MountainColor = 'stone' | 'earth' | 'terracotta';
type BeirutColor = 'urban' | 'concrete' | 'steel';
type CulinaryColor = 'olive' | 'saffron' | 'grape';
type FestivalColor = 'festive' | 'celebration' | 'heritage';
type CraftColor = 'copper' | 'silver' | 'ceramic';
type ModernColor = 'tech' | 'digital' | 'startup';

// Combined color type
type BadgeColor =
    | BasicColor
    | StatusColor
    | CedarColor
    | MediterraneanColor
    | MountainColor
    | BeirutColor
    | CulinaryColor
    | FestivalColor
    | CraftColor
    | ModernColor;

// Define badge size type
type BadgeSize = 'small' | 'medium' | 'large' | 'huge';

// Define badge radius type
type BadgeRadius = 'none' | 'small' | 'medium' | 'large' | 'pill';

// Define badge variant type
type BadgeVariant = 'normal' | 'outlined' | 'light';

// Define icon position type
type IconPosition = 'start' | 'end';

export interface BadgeProps {
    /**
     * Badge content
     */
    children: ReactNode;

    /**
     * Badge color variant
     * @default "primary"
     */
    color?: BadgeColor;

    /**
     * Badge size
     * @default "medium"
     */
    size?: BadgeSize;

    /**
     * Badge border radius
     * @default "pill"
     */
    radius?: BadgeRadius;

    /**
     * Badge visual variant
     * @default "normal"
     */
    variant?: BadgeVariant;

    /**
     * Outline color for outlined variant
     * Only applies when variant is "outlined"
     */
    outlineColor?: string;

    /**
     * Text color for outlined variant
     * Only applies when variant is "outlined"
     */
    outlineTextColor?: string;

    /**
     * Custom color for light variant
     * Automatically generates background and text colors
     * Only applies when variant is "light"
     */
    propColor?: string;

    /**
     * Icon to display with the badge
     */
    icon?: ReactNode;

    /**
     * Position of the icon relative to the text
     * @default "start"
     */
    iconPosition?: IconPosition;

    /**
     * Space between the icon and text (in pixels)
     * @default 7
     */
    iconSpacing?: number;

    /**
     * onClick handler for clickable badges
     */
    onClick?: () => void;

    /**
     * Indicates whether the badge is interactive (cursor: pointer)
     * @default false
     */
    interactive?: boolean;

    /**
     * Additional CSS class names
     */
    className?: string;

    /**
     * Inline styles
     */
    style?: CSSProperties;
}

// Define the color collections for external reference
interface BadgeColorCollections {
    BASIC: BasicColor[];
    STATUS: StatusColor[];
    CEDAR: CedarColor[];
    MEDITERRANEAN: MediterraneanColor[];
    MOUNTAIN: MountainColor[];
    BEIRUT: BeirutColor[];
    CULINARY: CulinaryColor[];
    FESTIVAL: FestivalColor[];
    CRAFT: CraftColor[];
    MODERN: ModernColor[];
}

// Define badge size collection
interface BadgeSizes {
    SMALL: 'small';
    MEDIUM: 'medium';
    LARGE: 'large';
    HUGE: 'huge';
}

// Define badge radius collection
interface BadgeRadius {
    NONE: 'none';
    SMALL: 'small';
    MEDIUM: 'medium';
    LARGE: 'large';
    PILL: 'pill';
}

// Define badge variant collection
interface BadgeVariants {
    NORMAL: 'normal';
    OUTLINED: 'outlined';
    LIGHT: 'light';
}

export const Badge: React.FC<BadgeProps & React.HTMLAttributes<HTMLSpanElement>> & {
    COLORS: BadgeColorCollections;
    SIZES: BadgeSizes;
    RADIUS: BadgeRadius;
    VARIANTS: BadgeVariants;
};

export default Badge;
