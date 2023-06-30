import { BoardsState } from './boards.state';
import { createReducer, on } from '@ngrx/store';
import { addBoards } from './boards.actions';

const boardsInitialState: BoardsState = [];

export const boardsReducer = createReducer(
  boardsInitialState,
  on(addBoards, (_state, action) => [...action.boards]),
);
