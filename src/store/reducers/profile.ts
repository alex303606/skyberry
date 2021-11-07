export interface IState {
  example: boolean;
}

const initialState: IState = {
  example: false,
};

export const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
