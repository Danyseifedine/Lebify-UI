import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

// Define button variant types
type BasicVariant = 'primary' | 'secondary' | 'tertiary' | 'basic';
type CedarVariant = 'cedar' | 'cedar-light' | 'cedar-dark';
type MediterraneanVariant = 'sea' | 'coast' | 'azure';
type MountainVariant = 'stone' | 'earth' | 'terracotta';
type BeirutVariant = 'urban' | 'concrete' | 'steel';
type CulinaryVariant = 'olive' | 'saffron' | 'grape';
type FestivalVariant = 'festive' | 'celebration' | 'heritage';
type CraftVariant = 'copper' | 'silver' | 'ceramic';
type ModernVariant = 'tech' | 'digital' | 'startup';

// Combined variant type
type ButtonVariant =
    | BasicVariant
    | CedarVariant
    | MediterraneanVariant
    | MountainVariant
    | BeirutVariant
    | CulinaryVariant
    | FestivalVariant
    | CraftVariant
    | ModernVariant;

// Define button type
type ButtonType = 'filled' | 'outlined' | 'ghost';

// Define hover effect types
type HoverEffect =
    | 'default'
    | 'none'
    | '3d-rotate'
    | 'magnetic'
    | 'sheen'
    | 'neon'
    | 'reveal'
    | 'expand'
    | 'liquid'
    | 'slice'
    | 'bounce'
    | 'glitch'
    | 'border-spin';

// Define icon position types
type IconPosition = 'left' | 'right';

// Define tooltip position types
type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

// Define tooltip theme types
type TooltipTheme = 'default' | 'cedar' | 'sea' | 'stone' | 'urban' | 'saffron';

// Define border radius types
type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'pill' | 'rounded';

// Define loading spinner types
type LoadingSpinner = 'dots' | 'circle' | 'pulse' | 'bars' | 'ellipsis';

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
    buttonType?: ButtonType;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: CSSProperties;
    hoverEffect?: HoverEffect;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    iconOnly?: boolean;
    iconSpacing?: string;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    tooltip?: ReactNode;
    tooltipPosition?: TooltipPosition;
    tooltipDelay?: number;
    tooltipClassName?: string;
    tooltipStyle?: CSSProperties;
    tooltipTheme?: TooltipTheme;
    borderRadius?: BorderRadius;
    loading?: boolean;
    loadingText?: string;
    loadingSpinner?: LoadingSpinner;
    loadingPosition?: IconPosition;
    hideTextWhenLoading?: boolean;
}

// Define the variant collections for external reference
interface ButtonVariantCollections {
    BASIC: BasicVariant[];
    CEDAR: CedarVariant[];
    MEDITERRANEAN: MediterraneanVariant[];
    MOUNTAIN: MountainVariant[];
    BEIRUT: BeirutVariant[];
    CULINARY: CulinaryVariant[];
    FESTIVAL: FestivalVariant[];
    CRAFT: CraftVariant[];
    MODERN: ModernVariant[];
}

// Define button type collection
interface ButtonTypes {
    FILLED: 'filled';
    OUTLINED: 'outlined';
    GHOST: 'ghost';
}

// Define hover effect collections
interface ButtonHoverEffects {
    DEFAULT: 'default';
    NONE: 'none';
    THREE_D_ROTATE: '3d-rotate';
    MAGNETIC: 'magnetic';
    SHEEN: 'sheen';
    NEON: 'neon';
    REVEAL: 'reveal';
    EXPAND: 'expand';
    LIQUID: 'liquid';
    SLICE: 'slice';
    BOUNCE: 'bounce';
    GLITCH: 'glitch';
    BORDER_SPIN: 'border-spin';
}

// Define icon position collections
interface ButtonIconPositions {
    LEFT: 'left';
    RIGHT: 'right';
}

// Define tooltip position collections
interface ButtonTooltipPositions {
    TOP: 'top';
    RIGHT: 'right';
    BOTTOM: 'bottom';
    LEFT: 'left';
}

// Define tooltip theme collections
interface ButtonTooltipThemes {
    DEFAULT: 'default';
    CEDAR: 'cedar';
    SEA: 'sea';
    STONE: 'stone';
    URBAN: 'urban';
    SAFFRON: 'saffron';
}

// Define border radius collections
interface ButtonBorderRadius {
    NONE: 'none';
    SMALL: 'small';
    MEDIUM: 'medium';
    LARGE: 'large';
    PILL: 'pill';
    ROUNDED: 'rounded';
}

// Define loading spinner collection
interface ButtonLoadingSpinner {
    DOTS: 'dots';
    CIRCLE: 'circle';
    PULSE: 'pulse';
    BARS: 'bars';
    ELLIPSIS: 'ellipsis';
}

declare const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    VARIANTS: ButtonVariantCollections;
    TYPES: ButtonTypes;
    HOVER_EFFECTS: ButtonHoverEffects;
    ICON_POSITIONS: ButtonIconPositions;
    TOOLTIP_POSITIONS: ButtonTooltipPositions;
    TOOLTIP_THEMES: ButtonTooltipThemes;
    BORDER_RADIUS: ButtonBorderRadius;
    LOADING_SPINNER: ButtonLoadingSpinner;
};

export default Button;