import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors} from '@config';
import {Typography, Icon, IconNames, Row} from '@components';
import styled from 'styled-components/native';

const {RegularLowerCase22} = Typography;

type Props = {
  title: string;
  iconName: IconNames;
  onPress: () => void;
};

export const Button: React.FC<Props> = ({title, onPress, iconName}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container
        backgroundColor={Colors.accentColor}
        alignItems={'center'}
        justifyContent={'center'}
        padding={18}
        marginVertical={20}>
        <IconContainer>
          <Icon color={Colors.white} size={30} name={iconName} />
        </IconContainer>
        <RegularLowerCase22 color={Colors.white}>{title}</RegularLowerCase22>
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled(Row)({
  borderRadius: 100,
});

const IconContainer = styled.View({
  position: 'absolute',
  left: 1,
  marginLeft: 30,
});
