import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const MenuBtn = ({ onPress, imgSource, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image
      source={imgSource}
      />
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 150,
    height: 180,
    flexDirection:'column',
    alignItems:'center',
    // flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#fff',
    borderRadius: 5,
    //borderWidth: 1,
    //borderColor: '#007aff',
    marginLeft: 5,
    paddingTop: 15,
    marginRight: 5
  }
};

export { MenuBtn };
