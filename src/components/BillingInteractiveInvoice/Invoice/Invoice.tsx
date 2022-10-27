import * as S from './Invoice.styled';

const Invoice = () => {
  return (
    <S.Invoice>
      <S.Title>Invoice</S.Title>

      <S.Period>
        Billing period from March 15th, 2021 to April 14th, 2021
      </S.Period>

      <S.InvoiceInternals>
        <S.ColumnTitles>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Amount</span>
        </S.ColumnTitles>

        <S.InvoiceItems>
          <S.Item>
            <span>Setup fee</span>
            <span>1</span>
            <span>$600.00</span>
            <span>$600.00</span>
          </S.Item>

          <S.Item>
            <span>Enterprise (per user)</span>
            <span>28</span>
            <span>$50.00</span>
            <span>$1400.00</span>
          </S.Item>

          <S.Item>
            <span>Additional bandwidth (per GB)</span>
            <span>1</span>
            <span>$600.00</span>
            <span>$600.00</span>
          </S.Item>

          <S.ColumnTitlesNested>
            <span>Storage (per GB)</span>
          </S.ColumnTitlesNested>

          <S.ItemAlt>
            <span>First 1,000</span>
            <span>1,000</span>
            <span>$1.00</span>
            <span>$1,000.00</span>
          </S.ItemAlt>
          <S.ItemAlt>
            <span>Next 1,001 to 10,000</span>
            <span>9,000</span>
            <span>$0.50</span>
            <span>$4,500.00</span>
          </S.ItemAlt>
          <S.ItemAlt>
            <span>10,001 and above</span>
            <span>100</span>
            <span>$0.25</span>
            <span>$25.00</span>
          </S.ItemAlt>

          <S.Item>
            <span>Discount (referral)</span>
            <span></span>
            <span></span>
            <span>-$1,000.00</span>
          </S.Item>
        </S.InvoiceItems>

        <S.Total>
          <span>Total</span>
          <span>12345</span>
        </S.Total>
      </S.InvoiceInternals>
    </S.Invoice>
  );
};

export default Invoice;
