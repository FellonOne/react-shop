import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description: string;
  image: string;
};

const cutTags = (text: string = '') => {
  return text.replace(/<\/?.+?>/gi, '');
};

export const PageMeta = (props: Props): JSX.Element => {
  const { title, description, image } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={cutTags(title)}></meta>
      <meta property="twitter:title" content={cutTags(title)}></meta>

      {Boolean(description) && (
        <meta property="og:description" content={cutTags(description)}></meta>
      )}
      {Boolean(description) && (
        <meta property="og:description" content={cutTags(description)}></meta>
      )}

      {Boolean(image) && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

PageMeta.defaultProps = {
  title: 'Site',
  description: null,
  image: null,
};
