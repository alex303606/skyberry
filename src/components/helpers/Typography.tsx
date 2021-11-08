import type {TextProps, TextStyle} from 'react-native';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import type {ComponentType} from 'react';
import {spacings, SpacingsProps} from './spacings';
import {Colors} from '@config';

export interface ColoredTextProps {
  color?: string;
  textAlign?: TextStyle['textAlign'];
  flexShrink?: number;
}

//to remove warn from styled components
const addPx = (value?: number) =>
  (value ?? null) !== null ? `${value}px` : undefined;

const coloredText = styled(
  Text as ComponentType<
    TextProps & ColoredTextProps & SpacingsProps & {lineHeight?: number}
  >,
)(({color, textAlign, flexShrink, lineHeight, ...props}) => ({
  color: color || Colors.textColor,
  textAlign: (textAlign || 'left') as any,
  flexShrink,
  lineHeight: addPx(lineHeight),
  ...spacings(props),
}));

const regular = styled(coloredText)({fontFamily: 'YandexSansDisplay'});
const bold = styled(coloredText)({fontFamily: 'TTChocolates_Bold'});
const polls = styled(coloredText)({fontFamily: 'TT_Polls_Script'});
const chocolates = styled(coloredText)({fontFamily: 'TTChocolates'});
const upperCaseStyle = {textTransform: 'uppercase'} as const;
const lowerCaseStyle = {textTransform: 'lowercase'} as const;
const capitalizeStyle = {textTransform: 'capitalize'} as const;
const regularUppercase = styled(regular)(upperCaseStyle);
const regularLowercase = styled(regular)(lowerCaseStyle);
const boldCapitalize = styled(bold)(capitalizeStyle);
const chocolatesUppercase = styled(chocolates)(upperCaseStyle);
const boldUppercase = styled(bold)(upperCaseStyle);

export const createFontStyle = (fontSize: number, lineHeight: number) => ({
  fontSize,
  lineHeight: addPx(lineHeight),
});

const Regular14 = styled(regular)(createFontStyle(14, 16));
const Regular18 = styled(regular)(createFontStyle(18, 20));
const Regular22 = styled(regular)(createFontStyle(22, 26));
const Regular24 = styled(regular)(createFontStyle(24, 28));
const Regular30 = styled(regular)(createFontStyle(30, 36));
const Regular48 = styled(regular)(createFontStyle(48, 54));

const RegularUpperCase18 = styled(regularUppercase)(createFontStyle(18, 20));
const RegularLowercase20 = styled(regularLowercase)(createFontStyle(20, 22));
const RegularLowerCase22 = styled(regularLowercase)(createFontStyle(22, 26));
const RegularUpperCase22 = styled(regularUppercase)(createFontStyle(22, 26));
const RegularUpperCase72 = styled(regularUppercase)(createFontStyle(72, 86));

const BoldCapitalize20 = styled(boldCapitalize)(createFontStyle(20, 24));
const BoldUppercase32 = styled(boldUppercase)(createFontStyle(32, 36));
const BoldUpperCase48 = styled(boldUppercase)(createFontStyle(48, 52));
const BoldUppercase55 = styled(boldUppercase)(createFontStyle(48, 60));

const Polls20 = styled(polls)(createFontStyle(20, 30));
const Polls18 = styled(polls)(createFontStyle(18, 30));
const Polls24 = styled(polls)(createFontStyle(24, 35));

const Chocolates20 = styled(chocolates)(createFontStyle(20, 24));
const ChocolatesUppercase36 = styled(chocolatesUppercase)(
  createFontStyle(36, 40),
);
const ChocolatesUppercase72 = styled(chocolatesUppercase)(
  createFontStyle(72, 80),
);

export const Typography = {
  Regular14,
  Regular18,
  Regular22,
  Regular24,
  Regular30,
  Regular48,
  Polls20,
  Polls18,
  Polls24,
  RegularUpperCase18,
  RegularLowercase20,
  RegularLowerCase22,
  RegularUpperCase22,
  RegularUpperCase72,
  BoldCapitalize20,
  BoldUppercase32,
  BoldUpperCase48,
  BoldUppercase55,
  Chocolates20,
  ChocolatesUppercase36,
  ChocolatesUppercase72,
};
