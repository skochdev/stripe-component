import styled from 'styled-components/macro';

export const Invoice = styled.figure`
  position: relative;
  min-height: 590px;
  height: 100%;
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
  margin-bottom: ${p => p.theme.space[1]}rem;
`;

export const InvoiceInternals = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 77%;
`;

export const ColumnTitles = styled.div`
  display: grid;
  padding: 1rem 0;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  font-size: ${p => p.theme.fontSizes.textRegular};
  font-weight: ${p => p.theme.fontWeights[2]};
  color: ${p => p.theme.colors.text};

  & span + span {
    text-align: right;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    & span + span {
      display: block;
    }
  }

  @media screen and (max-width: ${p => p.theme.breakpoints.mobile}) {
    & span:nth-child(3),
    & span:nth-child(2) {
      visibility: hidden;
    }
  }
`;

export const ColumnTitlesNested = styled(ColumnTitles)`
  grid-template-columns: 2fr;
  padding: 1rem 0;
`;

export const Total = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 1.2rem 0;
  display: flex;
  color: ${p => p.theme.colors.text};
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.invoiceHeading};
  font-weight: ${p => p.theme.fontWeights[2]};
  border-top: 1px solid ${p => p.theme.colors.borderColor};
`;

export const InvoiceItems = styled.ul`
  top: 3rem;
  width: 100%;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.textDimmed};
  font-size: ${p => p.theme.fontSizes.textRegular};
  font-weight: ${p => p.theme.fontWeights[1]};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 1.2rem 0;

  & + & {
    border-top: 1px solid ${p => p.theme.colors.borderColor};
  }

  & span + span {
    text-align: right;
  }

  @media screen and (max-width: ${p => p.theme.breakpoints.mobile}) {
    grid-template-columns: 2fr 2fr;
    & span:nth-child(3),
    & span:nth-child(2) {
      display: none;
    }
  }
`;

export const ItemAlt = styled(Item)`
  & + & {
    border-top: ${p => p.theme.borders[0]};
  }

  & > span {
    padding-left: 1rem;
  }
`;
