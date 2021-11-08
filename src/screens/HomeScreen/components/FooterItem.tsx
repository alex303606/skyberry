import React from 'react';
import {Block, Icon, Typography} from '@components';
import {Colors} from '@config';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {IOption} from '@interfaces';
const {Regular14} = Typography;

type Props = {
  option: IOption;
};

export const FooterItem: React.FC<Props> = ({option}) => {
  const {t} = useTranslation();
  const {icon, title, value} = option;
  return (
    <Container alignItems={'center'}>
      <Block marginBottom={5}>
        <Icon color={Colors.accentColor} size={30} name={icon} />
      </Block>
      <Regular14
        numberOfLines={1}
        marginTop={5}
        style={{color: Colors.secondaryColor}}>
        {t(`footer.${title}`, {value})}
      </Regular14>
    </Container>
  );
};

export const Container = styled(Block)({
  width: '30%',
});
