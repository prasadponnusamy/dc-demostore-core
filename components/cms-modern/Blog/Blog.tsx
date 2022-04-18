import React, { FC } from 'react'
import { CmsContent } from '@lib/cms/CmsContent';
import { ContentBlock } from '@components/cms-modern';
import { WithCMSTheme, useThemes } from '../../core/WithCMSTheme';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {},
    content: {
        maxWidth: 1050,
        margin: "auto"
    }
})

/**
 * Blog props
 */
interface BlogProps {

    /**
     * Blog snippet
     */
    snippet: CmsContent;

    /**
     * Array of content
     */
    contentTypes?: CmsContent[];

    /**
     * Content
     */
    content: CmsContent;

    /**
     * Theme
     */
    theme?: CmsContent;
}

const Blog: FC<React.PropsWithChildren<BlogProps>> = (props) => {
    const classes = useStyles(props);

    const {
        snippet,
        content,
        contentTypes = [],
        theme
    } = props

    const Blog = <Box className={classes.root}>
        <Box>
            <ContentBlock content={snippet} />
        </Box>
        <Box className={classes.content}>
            <ContentBlock content={content} />
            {
                contentTypes.map((item: any, index: number) => <Box key={index}>
                    <ContentBlock content={item} />
                </Box>)
            }
        </Box>
    </Box>

    const { themes } = useThemes() || {};
    if (themes) {
        return (
            <WithCMSTheme themes={themes} themeOverride={theme}>
                {Blog}
            </WithCMSTheme>
        )
    }
    return Blog
}

export default Blog;