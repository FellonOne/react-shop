import { Page, PageContainer, Rect, SneakersListStub } from 'components';
import React from 'react';

export const HomeStub = (): JSX.Element => {
  return (
    <Page>
      <PageContainer>
        <h2>
          <Rect type="black" height="20px" width="190px" />
        </h2>
        <SneakersListStub count={3} />
      </PageContainer>
      <PageContainer>
        <h2>
          <Rect type="black" height="20px" width="190px" />
        </h2>
        <SneakersListStub count={6} />
      </PageContainer>
    </Page>
  );
};
