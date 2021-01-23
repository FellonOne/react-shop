import React from 'react';

import * as bem from 'b_';
import { HomeStub } from './Home.stub';
import { Sneakers as SneakersType } from 'types';
import { Page, PageContainer, PageMeta } from 'components';

type Props = {
  data: {
    popular: SneakersType[];
    newes: SneakersType[];
  };
  fetchHomePage: () => void;
  isLoading: boolean;
};

export const Home = (props: Props): JSX.Element => {
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
      </PageContainer>
      <PageContainer>
        <h2>Newest</h2>
      </PageContainer>
    </Page>
  );
};