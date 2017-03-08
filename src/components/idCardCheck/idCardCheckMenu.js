import React, { Component } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight
} from 'react-native';
// import styles from '../styles/style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCard } from '../../actions/openCardAction';

import IdCardCheck from '../idCardCheck/idCardCheck';

import { Input, Card, CardSection, ButtonSet, Spinner } from '../../components/common';

// process : [0,1,2,3] = [initState, transactionBegin, transactionFinished]

class IdCardCheckMenu extends Component {

  constructor(props){
    console.log("constructor called");
    super(props);

  }

  componentWillReceiveProps(){}

  onReturn(){
    this.props.navigator.pop();
  }

  renderScene(){
   
        return(
        <View style={styles.parent}>
          <IdCardCheck>
          </IdCardCheck>
          <View style={styles.horizontalLine} />
          <TouchableHighlight underlayColor='transparent'
            style={styles.buttonStyle}
            onPress={this.onReturn.bind(this)} >        
            <Text style={styles.textStyle}>
               返回
             </Text>
          </TouchableHighlight>
        </View >
      );

    
  }

  render() {
    console.log('render called');
    return this.renderScene();
  }
}


export default connect()(IdCardCheckMenu);

// css样式
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECECF0',
  },
  parent:{
    alignItems: 'center',
    justifyContent:'center',
  },
   buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#0af',
    width:300,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 50,
    marginRight: 50
    // padding:20
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
    // 水平的分割线
  horizontalLine:{
    marginTop:5,
    height:5,
    backgroundColor:'#ccc',
  },
});