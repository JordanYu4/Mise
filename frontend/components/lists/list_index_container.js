import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ListIndex from './list_index';

import {
  editBoard,
  fetchBoard
} from '../../actions/board_actions';
import {
  fetchListsForBoard,
} from '../../actions/list_actions';
import {
  selectBoard,
  selectListsForBoard
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const { passCardId } = ownProps;
  const boardId = parseInt(ownProps.match.params.id); 
  const board = selectBoard(state.entities, boardId); 
  const lists = board.list_order ? 
    selectListsForBoard(state.entities, board) : {};
  return { boardId, board, lists, passCardId };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  fetchListsForBoard: boardId => dispatch(fetchListsForBoard(boardId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex));