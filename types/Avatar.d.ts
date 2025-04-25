import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

// Define avatar variant types
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
type AvatarVariant =
    | BasicVariant
    | CedarVariant
    | MediterraneanVariant
    | MountainVariant
    | BeirutVariant
    | CulinaryVariant
    | FestivalVariant
    | CraftVariant
    | ModernVariant
    | 'random'
    | 'none';

// Define avatar size types
type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

// Define avatar shape types
type AvatarShape = 'circle' | 'square' | 'rounded';

export interface AvatarProps {
    /**
     * Image source URL
     */
    src?: string;

    /**
     * User name (used for extracting initials and alt text)
     */
    name?: string;

    /**
     * Alternative text for the avatar image
     */
    alt?: string;

    /**
     * Avatar size
     * @default "medium"
     */
    size?: AvatarSize;

    /**
     * Avatar shape
     * @default "circle"
     */
    shape?: AvatarShape;

    /**
     * Avatar variant/style
     * @default "basic"
     */
    variant?: AvatarVariant;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Background color (CSS value)
     */
    backgroundColor?: string;

    /**
     * Text color for initials (CSS value)
     */
    textColor?: string;

    /**
     * Border color (CSS value)
     */
    borderColor?: string;

    /**
     * Border width (CSS value with unit)
     */
    borderWidth?: string;

    /**
     * Border radius (CSS value with unit)
     */
    borderRadius?: string;

    /**
     * Click handler
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

// Define the variant collections for external reference
interface AvatarVariantCollections {
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

// Define size collections
interface AvatarSizes {
    SMALL: 'small';
    MEDIUM: 'medium';
    LARGE: 'large';
    XLARGE: 'xlarge';
}

// Define shape collections
interface AvatarShapes {
    CIRCLE: 'circle';
    SQUARE: 'square';
    ROUNDED: 'rounded';
}

export const Avatar: React.FC<AvatarProps & React.HTMLAttributes<HTMLDivElement>> & {
    VARIANTS: AvatarVariantCollections;
    SIZES: AvatarSizes;
    SHAPES: AvatarShapes;
};

export default Avatar;

