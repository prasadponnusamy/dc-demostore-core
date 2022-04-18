import React, { FC } from 'react'
import ContentBlock from '../ContentBlock';
import { CmsContent } from '@lib/cms/CmsContent';

type Props = {
} & CmsContent;

const BannerSlot: FC<React.PropsWithChildren<Props>> = ({ content }) => {
    return <ContentBlock content={content} />;
}

export default BannerSlot;