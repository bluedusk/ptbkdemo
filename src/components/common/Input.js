import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, onFocus, onBlur, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#bccfd0'}
        onFocus={onFocus}
        onBlur={onBlur}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    // borderColor:'blue',
    // borderWidth:1,
    height:80,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 25,
    //lineHeight: 100,
    flex: 3
  },
  labelStyle: {
    fontSize: 25,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
