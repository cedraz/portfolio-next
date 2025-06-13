declare module '*.svg' {
  import React from 'react';

  // Solução para compatibilidade com @svgr/webpack e imports convencionais
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export { ReactComponent };
  export default src;
}
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}
