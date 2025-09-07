import { productionUrl } from 'lib/constants';

const description = process.env.SITE_DESCRIPTION;
const siteName = process.env.SITE_NAME;

export const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: productionUrl,
  siteName,
  title: {
    template: '%s',
    default: siteName,
  },
  description,
  images: [
    {
      url: `${productionUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  ],
};

export const fullCommonMetadata = {
  title: {
    template: '%s',
    default: siteName,
  },
  description,
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL(productionUrl)
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  keywords: ['software development', 'productivity', 'blog'],
  authors: [{ name: 'Carles Andrés', url: 'https://carlesandres.com' }],
  robots: 'index, follow',
  openGraph,
};
