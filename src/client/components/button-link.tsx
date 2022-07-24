import Link from 'next/link';
import React from 'react';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Link to navigate to */
    href: string;

    /** Extra class names */
    className?: string;

    /** Style the Link component */
    style?: object;
}

/**
 * Displays a link that is styled like a button
 */
const ButtonLink = (props: ButtonLinkProps) => {
    return (
        <button className={props.className} style={props.style}>
            <Link href={props.href}>{props.children}</Link>
        </button>
    );
};

export default ButtonLink;
