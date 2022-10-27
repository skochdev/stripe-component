import Checklist from './Checklist/Checklist';
import * as S from './BillingInteractiveInvoice.styled';
import { Box } from '../../utils/Box';
import Invoice from './Invoice/Invoice';

const checklistItems = [
  {
    title: 'One-time',
    description: 'Charge for one-time purchases',
  },
  {
    title: 'Usage-based billing',
    description: 'Calculate billing based on product usage',
  },
  {
    title: 'Tiered pricing',
    description: 'Charge different prices based on volume tiers',
  },
  {
    title: 'Promotions and trial periods',
    description: 'Adjust billing with discounts and trials',
  },
  {
    title: 'Billing frequency',
    description:
      'Bill daily, weekly, monthly, or annually in advance or in arrears, and set custom future start dates.',
  },
];

const BillingInteractiveInvoice = () => {
  return (
    <Box as="section" bg="#0A2540">
      <Box as={S.Wrapper}>
        <Box as={S.BillingInteractiveInvoice}>
          <S.Caption>Granular control</S.Caption>
          <S.Title>Effortlessly design and test pricing plans</S.Title>
          <S.Description>
            Iterate on your pricing as quickly as you improve your product with
            Stripe’s flexible subscription billing components.
          </S.Description>
          <Checklist checklistItems={checklistItems} />
        </Box>
        <Invoice />
      </Box>
    </Box>
  );
};

export default BillingInteractiveInvoice;
