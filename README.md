# @redox-org/react-native-redox

This's library with mobile components

## Installation

```sh
npm install @redox-org/react-native-redox
```

## Usage
### FOR Gradient Effect
```js
import { Curtain } from "@redox-org/react-native-redox";

// ...

<Curtain
    colors={['#FFF', '#000', '#222']}
    gradientEnabled={true}
    >
    <>{children[0]}<> // Header
    <>{children[1]}<> // BackComponent
    <>{children[2]}<> // Curtain Component
    </Curtain>

// ...
```
### FOR Default View
```js
import { Curtain } from "@redox-org/react-native-redox";

// ...

<Curtain
    styles={{...}}
    gradientEnabled={false}>
    <>{children[0]}<> // Header
    <>{children[1]}<> // BackComponent
    <>{children[2]}<> // Curtain Component
    </Curtain>

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
