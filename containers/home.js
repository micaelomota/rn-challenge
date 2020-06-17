import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeScreen from '../screens/Home';
import {toggleAccount, fetchData} from '../redux/actions';

function mapStateToProps(state) {
  return {
    account: state.account,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleAccount, fetchData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
