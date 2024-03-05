/* eslint-disable react/prop-types */
import * as React from "react"

type FooterLinkProps = React.ComponentProps<"a">

export default function FooterLink(props: FooterLinkProps) {
    return (
        <li>
            <a href={props.href} className="hover:underline" {...props}/>
        </li>
    )
}