import { createAction } from '@ngrx/store';
import { Board } from '../../models/board';

export enum BoardsActionTypes {
  AddBoards = '[Boards] Add boards',
}

// addBoards([...]) => {type: BoardsActionTypes.AddBoards, products: [...]}
export const addBoards = createAction(BoardsActionTypes.AddBoards, (boards: Board[]) => ({ boards }));
