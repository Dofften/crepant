const siteMetadata = {
  title: 'Frank Omondi',
  author: 'Frank Omondi',
  headerTitle: 'frankomondi',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://crepant.com',
  siteRepo: 'https://github.com/Dofften/crepant',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'frank@crepant.com',
  github: 'https://github.com/Dofften',
  twitter: 'https://twitter.com/dofften',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/in/frederick-omondi/',
  // spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  // steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
