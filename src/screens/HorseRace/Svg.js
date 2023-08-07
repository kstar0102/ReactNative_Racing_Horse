import React, { Component } from "react";
import { SvgXml } from "react-native-svg";
import backgroundSvg from "../../assets/horseImageData/NewBack/01.svg";

class BackgroundSvg extends Component {
  render() {
    return (
      <SvgXml xml={backgroundSvg} width="100%" height="100%" fill={"white"} />
    );
  }
}

export default BackgroundSvg;
