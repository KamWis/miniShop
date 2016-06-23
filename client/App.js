import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/index';
import Container from './components/container';

function mapStateToProps(state) {
  return {
    productList: state.products,
    gridClasses: state.gridClasses
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);

export default App;