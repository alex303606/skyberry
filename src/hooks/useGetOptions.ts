import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';

export const useGetOptions = (options: string[] | null) => {
  return useSelector((state: RootState) =>
    state.config.tags.filter(t => options?.includes(String(t.id))),
  );
};
