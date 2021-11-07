import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
  padding: number;
  thickness?: number;
  color: string;
};

export const Dashes: React.FC<Props> = ({
  padding,
  color,
  thickness,
  children,
}) => {
  const styles = {padding, borderWidth: thickness || 5, borderColor: color};

  return (
    <Dash {...styles}>
      <Dash {...styles}>
        <Dash {...styles}>{children}</Dash>
      </Dash>
    </Dash>
  );
};

const Dash = styled.View<{
  padding: number;
  borderWidth: number;
  borderColor: string;
}>(({padding, borderWidth, borderColor}) => ({
  borderStyle: 'dashed',
  borderRadius: 1000,
  padding,
  borderWidth,
  borderColor,
}));
