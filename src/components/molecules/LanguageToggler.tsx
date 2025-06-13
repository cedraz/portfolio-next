import { useRouter, usePathname } from '../../../navigation';
import Image, { StaticImageData } from 'next/image';

// Images
import USAFlag from '@/assets/language-toggle/usa-flag.svg';
import BrazilFlag from '@/assets/language-toggle/brazil-flag.svg';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Translate } from '@phosphor-icons/react';
import { Button } from '../ui/button';

export function LanguageToggler() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Translate size={20} />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'en' })}
        >
          <div className="flex gap-3">
            <Image
              src={USAFlag as StaticImageData}
              alt="usa-flag"
              style={{ width: '20px', height: 'auto' }}
            />
            English
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'pt' })}
        >
          <div className="flex gap-3">
            <Image
              src={BrazilFlag as StaticImageData}
              alt="usa-flag"
              style={{ width: '20px', height: 'auto' }}
            />
            Português
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
