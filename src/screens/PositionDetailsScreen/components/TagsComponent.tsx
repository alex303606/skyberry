import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {Row} from '@components';
import {Tag} from './Tag';
import {ITag} from '@interfaces';

type Props = {
  tags: ITag[];
};

export const TagsComponent: React.FC<Props> = ({tags}) => {
  const renderTag = useCallback(tag => {
    return <Tag key={tag.id} tag={tag} />;
  }, []);

  return <Tags marginVertical={30}>{tags.map(renderTag)}</Tags>;
};

const Tags = styled(Row)({
  flexWrap: 'wrap',
});
