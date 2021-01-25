import { Page, PageContainer, Rect, SneakersListStub } from 'components';
import React from 'react';

export const CatalogStub = (): JSX.Element => {
  return (
    <Page>
      <PageContainer
        btn={{
          text: 'Back',
          to: '/',
        }}
      >
        <h2>
          <Rect type="black" height="20px" width="90px" />
        </h2>
        <SneakersListStub count={18} />
      </PageContainer>
    </Page>
  );
};
