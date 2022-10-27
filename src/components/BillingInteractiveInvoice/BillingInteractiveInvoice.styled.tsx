import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: ${p => p.theme.breakpoints.laptop}) {
    max-width: 1080px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BillingInteractiveInvoice = styled.div`
  padding: 2rem 2rem;
  padding-right: ${p => p.theme.space[3]}rem;
  font-family: 'Roboto', sans-serif;
`;

export const Caption = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.caption};
  margin-bottom: ${p => p.theme.space[1]}rem;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: ${p => p.theme.fontSizes.title};
  margin-bottom: ${p => p.theme.space[1]}rem;
`;

export const Description = styled.p`
  color: ${p => p.theme.colors.textDimmed};
  font-size: ${p => p.theme.fontSizes.caption};
  margin-bottom: ${p => p.theme.space[1]}rem;
`;
