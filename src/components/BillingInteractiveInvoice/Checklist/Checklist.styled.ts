import styled from 'styled-components/macro';

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  display: flex;
  font-size: ${p => p.theme.fontSizes.textRegular};

  & + & {
    margin-top: ${p => p.theme.space[1]}rem;
  }
`;

export const Checkbox = styled.input`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CheckIcon = styled.div`
  color: ${p => p.theme.colors.text};
  opacity: 0.5;
  margin-right: 1rem;
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights[2]};
  color: ${p => p.theme.colors.text};
  margin-bottom: 6px;
  font-size: inherit;
`;

export const Description = styled.p`
  color: ${p => p.theme.colors.textDimmed};
  font-size: inherit;
  display: block;

  @media screen and (max-width: ${p => p.theme.breakpoints.laptop}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  } ;
`;
