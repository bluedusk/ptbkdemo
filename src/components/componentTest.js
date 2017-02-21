import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image } from 'react-native';

export default class ComponentTest extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.viewStyle}>
          <View style={styles.containerStyle}>
            <Image source={require('../assets/images/1487664060_navigation.png')}
              style={styles.imgStyle}
              />
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <View style={styles.closeBtnStyle}>
                <Text>Xccccccccccccc</Text>
              </View>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={{fontSize:50}}>Show Modal</Text>
        </TouchableHighlight>

      </View>
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

    position: 'absolute',
    top: 0,
    right: 0,
    alignSelf:'flex-end'
  }
};
