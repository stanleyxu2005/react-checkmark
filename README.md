<h1 align="center">reach-checkmark</h1>
<p align="center">
Animated checkmark you already need for React
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/react-checkmark"><img src="https://img.shields.io/npm/v/react-checkmark.svg"/> <img src="https://img.shields.io/npm/dm/react-checkmark.svg"/></a>
</p>
<p align="center">
<img src="https://mmjd.com/github/react-checkmark/example.png" alt="Screenshot"/>
</p>

[**See Live Demo**](https://mmjd.com/github/react-checkmark/)

## Getting Started

### Install the component
```shell script
npm i react-checkmark
```

### Use the component
```javascript
import { Checkmark } from 'react-checkmark'
```

**Default usage**
```html
render() {
  return ( <Checkmark /> )
}
```

**Usage with size specified:**
 * 'small' for 16px
 * 'medium' for 24px
 * 'large' for 52px
 * 'xLarge' for 72px
 * 'xxLarge' for 96px
 * or specify a valid number for pixel
```html
render() {
  return (
    <>
      <Checkmark size='xxLarge' />
      <Checkmark size='96px' />
    </>
  )
}
```

**Usage with color (name or hex value) specified:** 
```html
render() {
  return (
    <>
      <Checkmark size='128px' color='blue' />
      <Checkmark size='256px' color='#223344'/>
    </>
  )
}
```

---

LICENCE Apache 2.0 - Created by Stanley Xu
