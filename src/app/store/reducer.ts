import { BOARDS_FEATURE, BoardsState } from './boards/boards.state';
import { boardsReducer } from './boards/boards.reducer';

export interface State {
  [BOARDS_FEATURE]: BoardsState;
}

export const storeReducer = {
  [BOARDS_FEATURE]: boardsReducer,
};
