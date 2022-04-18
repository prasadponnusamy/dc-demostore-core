import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid'

interface Props {
    className?: string;
    style?: React.CSSProperties;
    index: number;
}

const LegacySliderSlide: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {
        className,
        children,
        index,
        ...other
    } = props;
    return (
        <li key={ nanoid() } className={clsx(
            'amp-dc-slider-slide',
            'amp-dc-slider-slide-card',
            'js_ca_slide',
            className
        )} {...other}>
            {children}
        </li>
    );
};

export default LegacySliderSlide