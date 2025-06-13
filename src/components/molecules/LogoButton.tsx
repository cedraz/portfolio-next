import * as React from 'react';

// Components
import { Logo } from '../atoms/Logo';
import Title from '../atoms/Title';

export default function LogoButton() {
  return (
    <a href="#" className="flex items-center gap-x-3">
      <Logo />
      <Title withMargin={false}>Cedraz</Title>
    </a>
  );
}
