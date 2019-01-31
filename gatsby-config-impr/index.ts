import { SiteMetaData } from '../src/types';
import { appTheme } from '../src/styles/theme';
import { GatsbyPlugin } from './types';

export const siteMetadata: SiteMetaData = {
  title: `WIP`,
  description: `WIP`,
  author: `@rei-m`,
};

export const plugins: GatsbyPlugin[] = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/../src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `WIP`,
      short_name: `WIP`,
      start_url: `/`,
      background_color: `#8bc34a`,
      theme_color: `#8bc34a`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.app/offline
  // 'gatsby-plugin-offline',
  {
    resolve: `@wapps/gatsby-plugin-material-ui`,
    options: {
      theme: {
        palette: {
          primary: { main: appTheme.colorPrimary },
          secondary: { main: appTheme.colorPrimaryDark },
          background: {
            default: appTheme.colorThin,
          },
        },
      },
    },
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/styles/typography.ts`,
    },
  },
  `gatsby-plugin-typescript`,
  `gatsby-plugin-remove-trailing-slashes`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-no-sourcemaps`,
];
