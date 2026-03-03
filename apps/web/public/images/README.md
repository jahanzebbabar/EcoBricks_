# Images Folder

Add your website images to this folder. 

## Usage

Reference images in your components using the `/images/` path:

```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

## Supported Formats

- JPG/JPEG
- PNG
- SVG
- WebP
- GIF

## Examples

```jsx
// In a component
import { useState } from 'react';

export default function MyComponent() {
  return (
    <img 
      src="/images/logo.png" 
      alt="Logo" 
      className="w-full h-auto"
    />
  );
}
```

Feel free to organize images into subfolders as needed:
- `/images/hero/`
- `/images/products/`
- `/images/icons/`
- etc.
