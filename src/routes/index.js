import { connect } from "react-redux";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Routes = (auth) => {
  const token = auth.tokenData;
  return token ? <AppStack /> : <AuthStack />;
};

const mapStateToProps = (state) => {
  return state.tokenData;
};

export default connect(mapStateToProps)(Routes);
