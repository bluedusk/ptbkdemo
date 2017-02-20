import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const Spinner = ({ size,show }) => {
  if (show === 1) {
    return (
      <View style={styles.spinnerStyle} show={show}>
        <ActivityIndicator size={size || 'large'} />
      </View>
    );
  }
  return null;

};

const styles = {
  spinnerStyle: {
    position: 'absolute',
    opacity: 0.3,
    justifyContent: 'center',
    width: width,
    height:height,
    backgroundColor:'green'
  }
};

export { Spinner };
