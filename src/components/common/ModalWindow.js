import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image } from 'react-native';

class ModalWindow extends Component{

  constructor(props){
      super(props);
      this.state = {
        visible:false
      }
  }

  render(){
    return (
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={styles.viewStyle}>
            <View style={styles.containerStyle}>
              <Image source={require('../../assets/images/1487664060_navigation.png')}
                style={styles.imgStyle}
                />

              <Text style={styles.textStyle}>123</Text>

              <View style={styles.closeBtnStyle}>
                <TouchableHighlight onPress={this.props.onClose}>
                <Image source={require('../../assets/images/delete_button_48px_1073943_easyicon.net.png')}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      );
    }
}


const styles = {
  viewStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex:1,
    margin:15,
    justifyContent:'center',
    alignItems: 'center'
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 200,
    width: 500,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // borderWidth: 1,
    borderRadius: 2,
    // borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor:'white'
  },
  textStyle: {
    fontSize:50,
    borderWidth: 1,
    borderColor: 'blue'
  },
  imgStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10
  },
  closeBtnStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    //
    position: 'absolute',
    // top: 0,
    right: 0
  }
};

export default ModalWindow;
