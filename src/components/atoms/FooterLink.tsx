import * as React from 'react';

type FooterLinkProps = React.ComponentProps<'a'>;

export default function FooterLink(props: FooterLinkProps) {
  return (
    <li>
      <a
        href={props.href}
        className="hover:underline flex items-center gap-1"
        {...props}
      >
        {props.children}
      </a>
    </li>
  );
}
