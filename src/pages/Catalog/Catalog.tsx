import { Page, PageContainer, PageMeta, SneakersList } from 'components';
import React from 'react';
import { connect } from 'react-redux';
import { catalogAction } from 'store/sections/catalog/actions';
import { getCatalog, isLoading } from 'store/sections/catalog/selectors';
import { AppState } from 'store/type';
import { Sneakers } from 'types';
import { CatalogStub } from './Catalog.stub';

type Props = {
  data: Sneakers[];
  isLoading: boolean;
  fetchCatalog: () => void;
};

const CatalogPage = (props: Props): JSX.Element => {
  const { data, fetchCatalog, isLoading } = props;

  React.useEffect(() => {
    if (!data || !data.length) {
      fetchCatalog();
    }
  }, []);

  if (isLoading) {
    return <CatalogStub />;
  }

  return (
    <Page>
      <PageMeta
        title="Catalog: best sneakers"
        description="Buy the best sneakers on the world!"
      />
      <PageContainer
        btn={{
          text: 'Back',
          to: '/',
        }}
      >
        <h2>Catalog</h2>
        <SneakersList items={data} />
      </PageContainer>
    </Page>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: getCatalog(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = { fetchCatalog: catalogAction };

export const Catalog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);

CatalogPage.defaultProps = {
  isLoading: true,
  data: [],
  fetchCatalog: () => {},
};
