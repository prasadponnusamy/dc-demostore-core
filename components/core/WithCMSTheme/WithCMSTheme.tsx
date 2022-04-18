import { CmsContent } from "@lib/cms/CmsContent";
import { CmsHierarchyNode } from "@lib/cms/fetchHierarchy";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material";
import React, { FC } from "react";
import { useThemes } from "./ThemesContext";
import { makeStyles } from '@mui/styles'
import { TypographyOptions } from "@mui/material/styles/createTypography";

import { palette, spacing, typography } from '@mui/system'
import styled from '@emotion/styled'

const Box = styled.div`${palette}${spacing}${typography}`

interface Props {
  themes?: CmsHierarchyNode | undefined
  themeOverride?: CmsContent | undefined
  children: React.ReactElement
}

const WithCMSTheme: FC<Props>  = ({ themeOverride, children }) => {
  const { themes } = useThemes();

  let CMSTheme = undefined;
  let typography = undefined;
  let palette = undefined;

  if (themes) {
    const defaultTheme = themes?.content?.defaultTheme;
    if (defaultTheme) {
      CMSTheme = themes?.children?.find(theme => theme.content._meta.deliveryId === defaultTheme.values[0].id)
    }
  }
  if (themeOverride) {
    CMSTheme = themes?.children?.find(theme => theme.content._meta.deliveryId === themeOverride.values[0].id)
  }
  if (CMSTheme) {
    palette = CMSTheme.children?.find(node => node.content.type === 'Palette')?.content
    typography = CMSTheme.children?.find(node => node.content.type === 'Typography')?.content
  }

  const defaultPalette = (hex: string) => ({
    light: hex,
    main: hex,
    dark: hex
  })

  const defaultTypography = (typography?: TypographyOptions): TypographyOptions => ({
    htmlFontSize:       16,
    fontSize:           14,
    fontFamily:         "'Roboto Condensed', sans-serif",
    fontWeightLight:    300,
    fontWeightRegular:  400,
    fontWeightMedium:   500,
    fontWeightBold:     700,
    ...typography
  })

  const theme = createTheme({
    palette: {
      primary: defaultPalette('#000'),
      secondary: defaultPalette('#d54d4d'),
      error: defaultPalette('#d54d4d'),
      background: {
        default: "#fff",
      },
      grey: {
        A100: "#333333",
      },
      text: {
        primary: "#333333",
      },
      divider: "#d5d5d5",
      ...palette
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      htmlFontSize: typography ? typography.htmlFontSize : 16,
      fontSize: typography ? typography.fontSize : 14,
      fontFamily: typography ? typography.fontFamily : "'Roboto Condensed', sans-serif",
      fontWeightLight: typography ? typography.fontWeightLight : 300,
      fontWeightRegular: typography ? typography.fontWeightRegular : 400,
      fontWeightMedium: typography ? typography.fontWeightMedium : 500,
      fontWeightBold: typography ? typography.fontWeightBold : 700,
      h1: {
        fontSize: typography ? typography.h1.fontSize : "40px",
        color: typography ? typography.h1.color : "#666",
        lineHeight: typography ? typography.h1.lineHeight : "44px",
        fontFamily: typography ? typography.h1.fontFamily : "'Montserrat', sans-serif",
        fontWeight: typography ? typography.h1.fontWeight : 400,
        textTransform: typography ? typography.h1.textTransform : "uppercase"
      },
      h2: {
        fontSize: typography ? typography.h2.fontSize : "24px",
        color: typography ? typography.h2.color : "#666",
        fontFamily: typography ? typography.h2.fontFamily : "'Montserrat', sans-serif",
        fontWeight: typography ? typography.h2.fontWeight : 400,
        textTransform: typography ? typography.h2.textTransform : "uppercase"
      },
      h3: {
        fontSize: typography ? typography.h3.fontSize : "18px",
        color: typography ? typography.h3.color : "#231f20",
        fontFamily: typography ? typography.h3.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.h3.fontWeight : 700,
        textTransform: typography ? typography.h3.textTransform : "uppercase"
      },
      h4: {
        fontSize: typography ? typography.h4.fontSize : "18px",
        color: typography ? typography.h4.color : "#231f20",
        fontFamily: typography ? typography.h4.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.h4.fontWeight : 400,
        textTransform: typography ? typography.h4.textTransform : "none"
      },
      h5: {
        fontSize: typography ? typography.h5.fontSize : "12px",
        color: typography ? typography.h5.color : "#999",
        fontFamily: typography ? typography.h5.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.h5.fontWeight : 400,
        textTransform: typography ? typography.h5.textTransform : "none"
      },
      h6: {
        fontSize: typography ? typography.h6.fontSize : "11px",
        color: typography ? typography.h6.color : "#231f20",
        fontFamily: typography ? typography.h6.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.h6.fontWeight : 400,
        textTransform: typography ? typography.h6.textTransform : "none"
      },
      subtitle1: {
        fontSize: typography ? typography.subtitle1.fontSize : "14px",
        color: typography ? typography.subtitle1.color : "#231f20",
        fontFamily: typography ? typography.subtitle1.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.subtitle1.fontWeight : 700,
        textTransform: typography ? typography.subtitle1.textTransform : "none"
      },
      subtitle2: {
        fontSize: typography ? typography.subtitle2.fontSize : "16px",
        color: typography ? typography.subtitle2.color : "#231f20",
        fontFamily: typography ? typography.subtitle2.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.subtitle2.fontWeight : 400,
        textTransform: typography ? typography.subtitle2.textTransform : "none"
      },
      body1: {
        fontSize: typography ? typography.body1.fontSize : "16px",
        color: typography ? typography.body1.color : "#231f20",
        fontFamily: typography ? typography.body1.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.body1.fontWeight : 400,
        textTransform: typography ? typography.body1.textTransform : "none"
      },
      body2: {
        fontSize: typography ? typography.body2.fontSize : "13px",
        color: typography ? typography.body2.color : "#666",
        fontFamily: typography ? typography.body2.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.body2.fontWeight : 400,
        textTransform: typography ? typography.body2.textTransform : "none"
      },
      button: {
        fontSize: typography ? typography.button.fontSize : "13px",
        color: typography ? typography.button.color : "#fff",
        backgroundColor: "#999",
        fontFamily: typography ? typography.button.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.button.fontWeight : 400,
        textTransform: typography ? typography.button.textTransform : "none"
      },
      caption: {
        fontSize: typography ? typography.caption.fontSize : "13px",
        color: typography ? typography.caption.color : "#666",
        fontFamily: typography ? typography.caption.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.caption.fontWeight : 400,
        textTransform: typography ? typography.caption.textTransform : "none",
        fontStyle: "italic"
      },
      overline: {
        fontSize: typography ? typography.overline.fontSize : "11px",
        color: typography ? typography.overline.color : "#666",
        fontFamily: typography ? typography.overline.fontFamily : "'Roboto Condensed', sans-serif",
        fontWeight: typography ? typography.overline.fontWeight : 400,
        textTransform: typography ? typography.overline.textTransform : "none"
      }
    },
  });

  console.log(`theme: ${theme}`)
  console.log(`themeOverride: ${themeOverride}`)

  // Add global style for the general default theme
  if (!themeOverride) {
    const useStyles = makeStyles({
      '@global': {
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        h1: {
          fontSize: theme.typography.h1.fontSize,
          color: theme.typography.h1.color,
          lineHeight: theme.typography.h1.lineHeight,
          fontFamily: theme.typography.h1.fontFamily,
          fontWeight: theme.typography.h1.fontWeight,
          textTransform: theme.typography.h1.textTransform
        },
        h2: {
          fontSize: theme.typography.h2.fontSize,
          color: theme.typography.h2.color,
          lineHeight: theme.typography.h2.lineHeight,
          fontFamily: theme.typography.h2.fontFamily,
          fontWeight: theme.typography.h2.fontWeight,
          textTransform: theme.typography.h2.textTransform
        },
        h3: {
          fontSize: theme.typography.h3.fontSize,
          color: theme.typography.h3.color,
          lineHeight: theme.typography.h3.lineHeight,
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: theme.typography.h3.fontWeight,
          textTransform: theme.typography.h3.textTransform
        },
        h4: {
          fontSize: theme.typography.h4.fontSize,
          color: theme.typography.h4.color,
          lineHeight: theme.typography.h4.lineHeight,
          fontFamily: theme.typography.h4.fontFamily,
          fontWeight: theme.typography.h4.fontWeight,
          textTransform: theme.typography.h4.textTransform
        },
        h5: {
          fontSize: theme.typography.h5.fontSize,
          color: theme.typography.h5.color,
          lineHeight: theme.typography.h5.lineHeight,
          fontFamily: theme.typography.h5.fontFamily,
          fontWeight: theme.typography.h5.fontWeight,
          textTransform: theme.typography.h5.textTransform
        },
        h6: {
          fontSize: theme.typography.h6.fontSize,
          color: theme.typography.h6.color,
          lineHeight: theme.typography.h6.lineHeight,
          fontFamily: theme.typography.h6.fontFamily,
          fontWeight: theme.typography.h6.fontWeight,
          textTransform: theme.typography.h6.textTransform
        },
        subtitle1: {
          fontSize: theme.typography.subtitle1.fontSize,
          color: theme.typography.subtitle1.color,
          lineHeight: theme.typography.subtitle1.lineHeight,
          fontFamily: theme.typography.subtitle1.fontFamily,
          fontWeight: theme.typography.subtitle1.fontWeight,
          textTransform: theme.typography.subtitle1.textTransform
        },
        subtitle2: {
          fontSize: theme.typography.subtitle2.fontSize,
          color: theme.typography.subtitle2.color,
          lineHeight: theme.typography.subtitle2.lineHeight,
          fontFamily: theme.typography.subtitle2.fontFamily,
          fontWeight: theme.typography.subtitle2.fontWeight,
          textTransform: theme.typography.subtitle2.textTransform
        },
        body1: {
          fontSize: theme.typography.body1.fontSize,
          color: theme.typography.body1.color,
          lineHeight: theme.typography.body1.lineHeight,
          fontFamily: theme.typography.body1.fontFamily,
          fontWeight: theme.typography.body1.fontWeight,
          textTransform: theme.typography.body1.textTransform
        },
        body2: {
          fontSize: theme.typography.body2.fontSize,
          color: theme.typography.body2.color,
          lineHeight: theme.typography.body2.lineHeight,
          fontFamily: theme.typography.body2.fontFamily,
          fontWeight: theme.typography.body2.fontWeight,
          textTransform: theme.typography.body2.textTransform
        },
        button: {
          fontSize: theme.typography.button.fontSize,
          color: theme.typography.button.color,
          lineHeight: theme.typography.button.lineHeight,
          fontFamily: theme.typography.button.fontFamily,
          fontWeight: theme.typography.button.fontWeight,
          textTransform: theme.typography.button.textTransform
        },
        caption: {
          fontSize: theme.typography.caption.fontSize,
          color: theme.typography.caption.color,
          lineHeight: theme.typography.caption.lineHeight,
          fontFamily: theme.typography.caption.fontFamily,
          fontWeight: theme.typography.caption.fontWeight,
          textTransform: theme.typography.caption.textTransform
        },
        overline: {
          fontSize: theme.typography.overline.fontSize,
          color: theme.typography.overline.color,
          lineHeight: theme.typography.overline.lineHeight,
          fontFamily: theme.typography.overline.fontFamily,
          fontWeight: theme.typography.overline.fontWeight,
          textTransform: theme.typography.overline.textTransform
        },
        p: {
          fontSize: theme.typography.body1.fontSize,
          color: theme.typography.body1.color,
          lineHeight: theme.typography.body1.lineHeight,
          fontFamily: theme.typography.body1.fontFamily,
          fontWeight: theme.typography.body1.fontWeight,
          textTransform: theme.typography.body1.textTransform 
        }
      }
    });

    //useStyles();
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default WithCMSTheme;
