import React, {useCallback} from 'react';
import styled from 'styled-components/native';

type Props = {
  flagURL: string;
  onPress: (lang: string) => void;
  language: string;
};

export const LanguageButton: React.FC<Props> = ({
  flagURL,
  onPress,
  language,
}) => {
  const onPressHandler = useCallback(() => {
    onPress(language);
  }, [language, onPress]);
  return (
    <StyledPressable onPress={onPressHandler}>
      <StyledImage resizeMode={'cover'} source={{uri: flagURL}} />
    </StyledPressable>
  );
};
export const StyledImage = styled.Image({
  flex: 1,
});

const StyledPressable = styled.Pressable({
  width: 60,
  height: 40,
  margin: 10,
});
