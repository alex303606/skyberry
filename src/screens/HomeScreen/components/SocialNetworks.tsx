import React, {useCallback} from 'react';
import {Row, Icon, Typography} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {ISocialNetwork} from '@interfaces';
const {Regular18} = Typography;

type Props = {
  socialNetworks: ISocialNetwork[];
};

export const SocialNetworks: React.FC<Props> = ({socialNetworks}) => {
  const renderItem = useCallback(
    ({name, icon}: ISocialNetwork) => (
      <Network key={name} flex={1} alignItems={'center'} marginTop={20}>
        <Icon name={icon} color={Colors.textColor} size={30} />
        <Regular18 marginLeft={15} color={Colors.accentColor}>
          {name}
        </Regular18>
      </Network>
    ),
    [],
  );

  return (
    <Wrapper marginHorizontal={80}>{socialNetworks.map(renderItem)}</Wrapper>
  );
};

const Wrapper = styled(Row)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const Network = styled(Row)({
  flexBasis: '25%',
});
