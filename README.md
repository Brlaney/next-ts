# Next-TS 

## A Next.js template repository pre-configured with my go-to frontend stack

- Typescript (easier debugging, clean & consistant code)
- Scss  (custom themes, mixins, & more)
- UiKit (classes, components, & styling)

</br>

## Demo

</br>

<div align="center">
  <h4><b>Homepage (desktop) - figure 1.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135329043-33ea31dd-f4df-4155-8106-c120634e2424.png" alt="Homepage-desktop"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Truss deformation - figure 2.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135328659-637d24cb-0b2f-4a6d-97f3-97a31ee4c9b1.png" alt="truss-deformation"  align="center" />
</div>

</br>
</br>

<div align="center">
  <h4><b>Beam deformation - figure 3.</b></h4>
  <img src="https://user-images.githubusercontent.com/64326462/135328653-a190919c-c149-4775-8b3b-1c664bb4c018.png" alt="beam-deformation"  align="center" />
</div>

</br>
</br>

## Current issues:

My text editor (Visual Studio Code) is currently giving me and error in each file that imports anything from react. For example:

```jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/css/uikit.css';
import '@/styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <Layout>
        <Component
          {...pageProps}
          key={router.route}
        />
      </Layout>
    </AnimatePresence>
  )
};
```

In the first line of the example above, 'react' is underlined with the red squiggly lines we all have come to loathe. 

The error message given by my editor is the following:

`Cannot find module 'react' or its corresponding type declarations.ts(2307)`
