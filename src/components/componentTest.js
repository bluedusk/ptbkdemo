import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image, Alert } from 'react-native';
import ModalWindow from './common/ModalWindow';

export default class ComponentTest extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: true,
      message:""
    }
  }

  onModalClose(){
    this.setState({modalVisible: false});
  }



  renderTable(){
    const testData = [{label:'hello',value:'world'},{label:'hello',value:'world'},{label:'hello',value:'world'}];
    const tableData = this.props.data;
    return testData.map((item)=>{
      return(
        <View style={styles.row}>
          <Text style={styles.lable}>item.label</Text>
          <Text style={styles.value}>item.value</Text>
        </View>
      );
    })


  }

  render() {
    return (
      <View style={styles.table}>

        {/* <ModalWindow
          onClose={this.onModalClose.bind(this)}
          visible={this.state.modalVisible}
          message={this.state.modalMessage}/> */}

        {/* {this.renderTable()} */}

      </View>
    );
  }
}


const styles = {
  table: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red',
    margin:15,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    margin:15,
    justifyContent:'center',
    alignItems: 'center'
  },
  lable: {
    borderWidth: 1,
    borderColor: 'red',
    flex:1,
    margin:15,
    justifyContent:'center',
    alignItems: 'center'
  },
  value: {
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
    fontSize:30,
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
    // top: 0,
    right: 0


  }
};
