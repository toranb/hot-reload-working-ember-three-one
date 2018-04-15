import { connect } from 'ember-redux';

const stateToComputed = (state) => {
  return {
    number: state.number.value
  }
}

const dispatchToActions = (dispatch) => ({
  add: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
