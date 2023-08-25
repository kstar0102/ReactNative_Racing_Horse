import React from 'react';
import { View } from 'react-native';

const Camera = ({ children, cameraPosition }) => {
  const cameraStyle = {
    position: 'absolute',
    left: cameraPosition.x,
    top: cameraPosition.y,
  };

  return <View style={cameraStyle}>{children}</View>;
};

export default Camera;
