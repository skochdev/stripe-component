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
