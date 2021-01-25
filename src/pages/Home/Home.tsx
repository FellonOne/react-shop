import React from 'react';
import { connect } from 'react-redux';

import type { Sneakers as SneakersType } from 'types';
import { Page, PageContainer, PageMeta, SneakersList } from 'components';

import { fetchHomePage } from 'store/sections/homepage/actions';
import { HomeStub } from './Home.stub';
import { AppState } from 'store/type';
import { getHomePage, isLoading } from 'store/sections/homepage/selectors';

type Props = {
  data: {
    popular: SneakersType[];
    newest: SneakersType[];
  };
  fetchHomePage: () => void;
  isLoading: boolean;
};

const HomePage = (props: Props): JSX.Element => {
  const { data, fetchHomePage, isLoading } = props;

  React.useEffect(() => {
    if (!data.popular.length) {
      fetchHomePage();
    }
  }, []);

  if (isLoading) return <HomeStub />;

  return (
    <Page>
      <PageMeta
        title="Home page"
        description="Buy awesome snikers only on us!"
      />
      <PageContainer>
        <h2>Popular</h2>
        <SneakersList items={data.popular} />
      </PageContainer>
      <PageContainer
        btn={{
          text: 'See more',
          to: '..',
        }}
      >
        <h2>Newest</h2>
        <SneakersList items={data.newest} />
      </PageContainer>
    </Page>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: getHomePage(state),
  isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchHomePage };

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);

HomePage.defaultProps = {
  isLoading: false,
  data: {
    newest: [],
    popular: [],
  },
  fetchHomePage: (): void => {},
} as Props;
