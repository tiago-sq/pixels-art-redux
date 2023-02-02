import { CHANGE_BRUSH_COLOR } from '../actions/actionTypes';

const INITIAL_STATE = {
  brushColor: 'blue',
};

const brushReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_BRUSH_COLOR:
      return {
        ...state,
        brushColor: action.payload,
      }
    default:
      return state;
  }
}

export default brushReducer;
