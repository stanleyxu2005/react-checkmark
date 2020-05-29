# react-typescript-checkmark

This is an animated checkmark in React with TypeScript. This is a fork of a previous project that lacked TypeScript, optional colors, and a few minor props. This project decided to forego the previous projects use of .LESS styling files and instead use the 'style-components' library. This allows for broader customization of the styling via props.

**Using this component:**

```javascript
import { Checkmark } from 'react-typescript-checkmark';

const ExampleComponent = () => {
  return <Checkmark size='large' backgroundColor='black' />;
};
```

**API**

Component props:

size?: Sizes | number;
visible?: boolean;
className?: string;
