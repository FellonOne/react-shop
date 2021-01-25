import { Page, PageContainer, PageMeta } from 'components';
import React from 'react';

import './Upcoming.css';

export const Upcoming = (): JSX.Element => {
  return (
    <Page>
      <PageMeta title="Upcoming..." description="Our future" />
      <PageContainer>
        <h2>Upcoming...</h2>
        
      </PageContainer>
    </Page>
  );
};
