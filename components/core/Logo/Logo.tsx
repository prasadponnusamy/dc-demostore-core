import React from 'react';
import Link from 'next/link';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
}

const Logo: React.FC<React.PropsWithChildren<Props>> = (props) => (
    <Link href="/">
        <a>
            <img {...props} alt="" src="https://cdn.media.amplience.net/i/dcdemo/anyafinn-logo" />
        </a>
    </Link>
);

export default Logo