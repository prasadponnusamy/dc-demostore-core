import React, { FC } from 'react'
import ContentBlock from '../ContentBlock';
import { CmsContent } from '@lib/cms/CmsContent';

type Props = {
} & CmsContent;

const LocalizedBannerSlot: FC<React.PropsWithChildren<Props>> = ({ content }) => {
    return <ContentBlock content={content} />;
}

export default LocalizedBannerSlot;