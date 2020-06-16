import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeScreen from '../screens/Home';
import {toggleAccount} from '../redux/actions';

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    account: state.account,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleAccount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
