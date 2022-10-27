import styled from 'styled-components/macro';

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  position,
  PositionProps,
} from 'styled-system';
import React from 'react';

interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    PositionProps {
  children: React.ReactNode;
}

export const Box = styled.div<Props>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color,
  space,
  layout,
  typography,
  flexbox,
  grid,
  position
);
