import { connect } from "react-redux";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = (auth) => {
  const token = auth.auth.token;
  return token ? <AppStack/> : <AuthStack /> ;
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Routes);
