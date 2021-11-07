import React, {useCallback} from 'react';
import {Row} from '@components';
import {LanguageButton} from './LanguageButton';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {ILanguage} from '@interfaces';

type Props = {
  languages: ILanguage[];
};

export const LanguagePicker: React.FC<Props> = ({languages}) => {
  const {i18n} = useTranslation();
  const changeLangHandler = useCallback(
    async (lang: string) => {
      await i18n.changeLanguage(lang);
    },
    [i18n],
  );

  const renderLang = useCallback(
    (item: ILanguage) => (
      <LanguageButton
        key={item.lang}
        language={item.lang}
        onPress={changeLangHandler}
        flagURL={item.flagURL}
      />
    ),
    [changeLangHandler],
  );

  return (
    <Container alignItems={'center'}>{languages.map(renderLang)}</Container>
  );
};

export const Container = styled(Row)({
  position: 'absolute',
  right: 15,
  bottom: 15,
});
