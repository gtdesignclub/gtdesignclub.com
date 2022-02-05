let contentfulConfig;
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://gtdesignclub.com",
    title: "GT Design Club",
    description: "The homepage for Georgia Tech's Design Club.",
    social: {
      instagram: "https://instagram.com/gtdesignclub",
      facebook: "https://facebook.com/gtdesignclub",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GT Design Club",
        short_name: "GT Design Club",
        start_url: "/",
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-anchor-links",
  ],
};
