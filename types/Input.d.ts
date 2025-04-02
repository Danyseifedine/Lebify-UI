import { ReactNode, ChangeEvent, FocusEvent, KeyboardEvent, CSSProperties } from 'react';

// Define input variant types
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
type InputVariant =
    | BasicVariant
    | CedarVariant
    | MediterraneanVariant
    | MountainVariant
    | BeirutVariant
    | CulinaryVariant
    | FestivalVariant
    | CraftVariant
    | ModernVariant;

// Define input types
type InputType =
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'file'
    | 'textarea'
    | 'select';

// Define border radius types
type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'pill';

// Define input style types
type InputStyle = 'default' | 'floating' | 'animated-border' | 'underlined' | 'search';

// Define option type for select inputs
interface InputOption {
    value: string;
    label: string;
}

export interface InputProps {
    /**
     * Input id attribute
     */
    id?: string;

    /**
     * Input name attribute
     */
    name?: string;

    /**
     * Input type
     * @default "text"
     */
    type?: InputType;

    /**
     * Input value (controlled component)
     */
    value?: any;

    /**
     * Default input value (uncontrolled component)
     */
    defaultValue?: any;

    /**
     * Input placeholder text
     */
    placeholder?: string;

    /**
     * Input label
     */
    label?: ReactNode;

    /**
     * Helper text displayed below the input
     */
    helperText?: ReactNode;

    /**
     * Whether the input has an error
     * @default false
     */
    error?: boolean;

    /**
     * Whether the input has a success state
     * @default false
     */
    success?: boolean;

    /**
     * Whether the input is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the input is required
     * @default false
     */
    required?: boolean;

    /**
     * Whether the input is read-only
     * @default false
     */
    readOnly?: boolean;

    /**
     * Whether the input should be focused on mount
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Input autocomplete attribute
     * @default "off"
     */
    autoComplete?: string;

    /**
     * Input visual style variant
     * @default "primary"
     */
    variant?: InputVariant;

    /**
     * Input size
     * @default "medium"
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Input border radius
     * @default "medium"
     */
    borderRadius?: BorderRadius;

    /**
     * Input style variant
     * @default "default"
     */
    inputStyle?: InputStyle;

    /**
     * Additional CSS class name
     */
    className?: string;

    /**
     * Additional inline styles
     */
    style?: CSSProperties;

    /**
     * Callback fired when the input value changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Callback fired when the input is focused
     */
    onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Callback fired when the input loses focus
     */
    onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Callback fired when a key is pressed down
     */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Callback fired when a key is released
     */
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Callback fired when a key is pressed
     */
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

    /**
     * Icon displayed at the left side of the input
     */
    leftIcon?: ReactNode;

    /**
     * Icon displayed at the right side of the input
     */
    rightIcon?: ReactNode;

    /**
     * Maximum length of the input value
     */
    maxLength?: number;

    /**
     * Minimum length of the input value
     */
    minLength?: number;

    /**
     * Pattern for input validation
     */
    pattern?: string;

    /**
     * Minimum value for number inputs
     */
    min?: number | string;

    /**
     * Maximum value for number inputs
     */
    max?: number | string;

    /**
     * Step value for number inputs
     */
    step?: number | string;

    /**
     * Whether multiple files can be selected (for file inputs)
     * @default false
     */
    multiple?: boolean;

    /**
     * File types accepted (for file inputs)
     */
    accept?: string;

    /**
     * Number of rows (for textarea)
     * @default 4
     */
    rows?: number;

    /**
     * Number of columns (for textarea)
     */
    cols?: number;

    /**
     * Options for select inputs
     */
    options?: InputOption[];

    /**
     * Whether to show character count
     * @default false
     */
    showCharacterCount?: boolean;

    /**
     * Whether the input should take full width
     * @default false
     */
    fullWidth?: boolean;
}

// Define the variant collections for external reference
interface InputVariantCollections {
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

// Define input type collection
interface InputTypes {
    TEXT: 'text';
    PASSWORD: 'password';
    EMAIL: 'email';
    NUMBER: 'number';
    TEL: 'tel';
    URL: 'url';
    SEARCH: 'search';
    DATE: 'date';
    TIME: 'time';
    DATETIME: 'datetime-local';
    MONTH: 'month';
    WEEK: 'week';
    COLOR: 'color';
    FILE: 'file';
    TEXTAREA: 'textarea';
    SELECT: 'select';
}

// Define border radius collection
interface InputBorderRadius {
    NONE: 'none';
    SMALL: 'small';
    MEDIUM: 'medium';
    LARGE: 'large';
    PILL: 'pill';
}

// Define input styles collection
interface InputStyles {
    DEFAULT: 'default';
    FLOATING: 'floating';
    ANIMATED_BORDER: 'animated-border';
    UNDERLINED: 'underlined';
    SEARCH: 'search';
}

export const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> & {
    VARIANTS: InputVariantCollections;
    TYPES: InputTypes;
    BORDER_RADIUS: InputBorderRadius;
    STYLES: InputStyles;
};

export default Input;
