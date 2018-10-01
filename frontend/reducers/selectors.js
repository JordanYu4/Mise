export const getAllBoards = ({ boards }) => {
  return (
    Object.keys(boards).map(key => boards[key])
  );
};

export const selectBoard = ({ boards }, boardId) => {
  return boards[boardId] || {};
};

export const selectListsForBoard = ({lists}, board) => {
  // debugger
  return board.listIds.map(listId => lists[listId]);
};
