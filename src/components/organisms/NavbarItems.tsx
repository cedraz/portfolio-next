import * as React from 'react';

// Components
import { Button } from '../ui/button';
import ButtonGroup from '../molecules/ButtonGroup';
import LogoButton from '../molecules/LogoButton';
import { LanguageToggler } from '../molecules/LanguageToggler';

interface NavbarItemsProps {
  handleClick: (link: string) => void;
}

// next intl
import { useTranslations } from 'next-intl';

export default function NavbarItems({ handleClick }: NavbarItemsProps) {
  const t = useTranslations('Navbar');

  return (
    <>
      <div className="flex flex-1 items-center justify-center md:justify-start">
        <LogoButton />
      </div>

      <div className="hidden md:flex md:items-center md:justify-center">
        <ButtonGroup direction="row" />
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end gap-5">
        <Button onClick={() => handleClick('#contact')}>
          {t('contactMe')}
        </Button>
        <LanguageToggler />
      </div>
    </>
  );
}
