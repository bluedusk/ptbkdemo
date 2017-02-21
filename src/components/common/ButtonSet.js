import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from 'apsl-react-native-button';



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
        textStyle={styles.textStyle}
        isLoading={false}
        onPress={onPress1}
        >
        确定
      </Button>
      <Button
        style={styles.buttonStyle}
        textStyle={styles.textStyle}
        isLoading={false}
        onPress={onPress2}
        >
        返回
      </Button>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: 'blue',
    width:150,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
    // padding:20
  },
  btnContainer: {
    flexDirection: 'row',
    padding:20,
    justifyContent: 'center'
  }
};

export { ButtonSet };
