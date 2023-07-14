import React from "react";
import { connect } from "react-redux";
import JockeyRegister from "./JockeyRegister";
import JocTraining from "./JocTraining";

const JockeyTraingin = ({isjockey}) => {
  return  isjockey ? <JocTraining /> : <JockeyRegister />
};

const mapStateToProps = state => {
  return {
    isjockey: state.jockeyData.getAllData
  }
}
export default connect(mapStateToProps)(JockeyTraingin);
