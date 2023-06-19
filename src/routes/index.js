import { connect } from "react-redux";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = (data) => {
  const token = data.data.token;

  return token ? <AppStack/> : <AuthStack /> ;
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(Routes);
