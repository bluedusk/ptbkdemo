import React from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';


const ButtonSet = ({ onPress1, onPress2 }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    // <TouchableOpacity onPress={onPress} style={buttonStyle}>
    //   <Text style={textStyle}>
    //     {children}
    //   </Text>
    // </TouchableOpacity>
    <View style={styles.btnContainer}>
      <Button
         style={styles.buttonStyle}
         onPress={onPress1}
         title="提交"
       />
       <Button
         style={styles.buttonStyle}
         onPress={onPress2}
         title="返回"
       />
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    // marginLeft: 10,
    // marginRight: 10,
    // padding:20
  },
  btnContainer: {
    flexDirection: 'row',
    padding:10,
    justifyContent: 'center'
  }
};

export { ButtonSet };
