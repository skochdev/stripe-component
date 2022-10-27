import React from 'react';
import { Box } from '../../utils/Box';
import { GlobalStyle } from '../../global-styles/GlobalStyle';
import BillingInteractiveInvoice from '../BillingInteractiveInvoice/BillingInteractiveInvoice';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box as="main">
        <Box as="div">
          <BillingInteractiveInvoice />
        </Box>
      </Box>
    </>
  );
}

export default App;
