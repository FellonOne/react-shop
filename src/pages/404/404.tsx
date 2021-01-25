import { Page, PageContainer } from 'components';
import React from 'react';

/*
type Props = {
  children: React.ReactNode | React.ReactNode[];
  code: number;
};
*/

export const NotFound = (): JSX.Element => {
  return (
    <Page>
      <PageContainer>
        <h1>Page not found</h1>
      </PageContainer>
    </Page>
  );
};
