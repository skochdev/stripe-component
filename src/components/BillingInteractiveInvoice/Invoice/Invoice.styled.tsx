import styled from 'styled-components/macro';

export const Invoice = styled.figure`
  position: relative;
  min-height: 590px;
  padding: 3rem 2rem 2rem;
  background-color: ${p => p.theme.colors.backgroundAlt};
  margin: 0;
  border: ${p => p.theme.borders[1]};
  border-color: ${p => p.theme.colors.borderColor};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.invoiceHeading};
  color: ${p => p.theme.colors.text};
  text-align: center;
  margin-bottom: ${p => p.theme.space[1]}rem;
`;

export const Period = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: ${p => p.theme.fontSizes.textRegular};
  color: ${p => p.theme.colors.textDimmed};
  margin-bottom: ${p => p.theme.space[2]}rem;
`;

export const InvoiceInternals = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 80%;
  justify-content: space-between;
`;

export const ColumnTitles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-size: ${p => p.theme.fontSizes.textRegular};
  font-weight: ${p => p.theme.fontWeights[2]};
  color: ${p => p.theme.colors.text};

  & span + span {
    text-align: right;
  }
`;

export const Total = styled.div`
  display: flex;
  color: ${p => p.theme.colors.text};
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.invoiceHeading};
  font-weight: ${p => p.theme.fontWeights[2]};
`;

export const InvoiceItemsWrapper = styled.div``;

export const InvoiceItems = styled.ul`
  position: absolute;
  top: 3.75rem;
  width: 100%;
`;

export const Item = styled.li`
  padding: 1rem 0;
  color: ${p => p.theme.colors.textDimmed};
  font-size: ${p => p.theme.fontSizes.textRegular};
  font-weight: ${p => p.theme.fontWeights[2]};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;

  & span + span {
    text-align: right;
  }
`;
