import type React from 'react';
import type {View, ViewProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import type {SpacingsProps} from './spacings';
import {spacings} from './spacings';
import {testProps} from '@utils';

export interface BlockStyleProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | 'auto';
  flex?: number;
  flexShrink?: number;
  elevation?: number;
  backgroundColor?: string;
}

type PropsWithChildren<P> = P & {children?: React.ReactNode};

export type BlockProps = BlockStyleProps & ViewProps & SpacingsProps;

export type RowProps = BlockProps;

const blockStyles = ({
  alignItems = 'stretch',
  alignSelf = 'auto',
  backgroundColor = 'transparent',
  justifyContent = 'flex-start',
  elevation = 0,
  flex,
  ...props
}: BlockProps) => ({
  alignItems,
  alignSelf,
  backgroundColor,
  justifyContent,
  elevation: `${elevation}`,
  flex: flex ? `${flex}` : undefined,
  ...spacings(props),
});
type StyledComponent = React.ForwardRefExoticComponent<
  PropsWithChildren<BlockProps> & React.RefAttributes<View>
>;
const StyledBlock = styled.View.attrs(props => testProps(props.testID))(
  blockStyles,
);
const StyledSafeAreaBlock = styled(SafeAreaView)(blockStyles);
const StyledRow = styled(StyledBlock)({flexDirection: 'row'});

export const Block: StyledComponent = StyledBlock;
export const SafeAreaBlock: StyledComponent = StyledSafeAreaBlock;
export const Row: StyledComponent = StyledRow;
