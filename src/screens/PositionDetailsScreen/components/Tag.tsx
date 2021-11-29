import React from 'react';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {ITag} from '@interfaces';

const {RegularLowercase20} = Typography;

type Props = {
  tag: ITag;
};

export const Tag: React.FC<Props> = ({tag}) => {
  const {backgroundColor, label} = tag;

  return (
    <Wrapper
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={backgroundColor}
      paddingVertical={15}
      paddingHorizontal={50}
      margin={10}>
      <RegularLowercase20 color={Colors.fillColor}>{label}</RegularLowercase20>
      <IconWrapper marginLeft={20}>
        <Icon name={IconNames[tag.icon]} size={40} color={Colors.fillColor} />
      </IconWrapper>
    </Wrapper>
  );
};

const IconWrapper = styled(Block)({
  position: 'absolute',
  left: 0,
});

const Wrapper = styled(Row)({
  width: 300,
  borderRadius: 50,
  elevation: 4,
});
