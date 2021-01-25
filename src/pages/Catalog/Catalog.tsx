import { Page, PageContainer } from 'components';
import React from 'react';
import { Sneakers } from 'types';
import { CatalogStub } from './Catalog.stub';

type Props = {
  data: Sneakers[];
  isLoading: boolean;
  fetchCatalog: () => void;
};

export const Catalog = (props: Props): JSX.Element => {
  const { data, fetchCatalog, isLoading } = props;

  if (isLoading) {
    return <CatalogStub />;
  }

  return (
    <Page>
      <PageContainer
        btn={{
          text: 'Back',
          to: '/',
        }}
      >
        <h2>Catalog</h2>
      </PageContainer>
    </Page>
  );
};

Catalog.defaultProps = {
  isLoading: true,
  data: [],
  fetchCatalog: () => {},
};
