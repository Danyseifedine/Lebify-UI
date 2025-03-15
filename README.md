# Lebify UI

A React component library inspired by Lebanese design elements and aesthetics.

## Installation

```bash
npm install lebify-ui
# or
yarn add lebify-ui
```

## Usage

```jsx
import { Button } from "lebify-ui";

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Marhaba!")}>
        Click Me
      </Button>
    </div>
  );
}
```

## Available Components

### Button

```jsx
<Button
  variant="primary" // primary, secondary, tertiary, basic, cedar, sea, stone, etc.
  buttonType="filled" // filled, outlined, ghost
  size="medium" // small, medium, large
  disabled={false}
  onClick={() => {}}
  hoverEffect="default" // default, grow, shrink, float, sink, pulse, glow
  icon={<IconComponent />} // optional icon
  iconPosition="left" // left, right
  iconOnly={false} // true for icon-only buttons
  tooltip="Helpful text" // optional tooltip
  tooltipPosition="top" // top, right, bottom, left
  borderRadius="medium" // none, small, medium, large, pill, rounded
  loading={false} // show loading state
  loadingText="Loading..." // text to show during loading
  loadingSpinner="circle" // circle, dots, pulse, bars, ellipsis
  loadingPosition="left" // left, right
  hideTextWhenLoading={false} // hide text when loading
>
  Button Text
</Button>
```

### Card

```jsx
<Card
  title="Card Title" // optional
  variant="default" // default, primary, secondary
  elevated={false} // adds shadow when true
>
  Card content goes here
</Card>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
