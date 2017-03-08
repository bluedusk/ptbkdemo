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

class OpenCard extends Component {

  constructor(props){
    console.log("constructor called");
    super(props);
    this.state = {
      idNo:'',
      name:'',
      cardNo:'',
      password:'',
      confirmPassword:'',
      error: '',
      result: '',
      process: 0
    }

  }

  componentWillReceiveProps(props){
    this.setState({process:props.process, result:props.result});
  }

  onSubmit(){
   this.props.openCard(this.state); // trigger action creator
   this.setState({process:1});
  }

  onReturn(){
    this.props.navigator.pop();
  }

  onCardNumFocus(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }


  renderScene(){
    switch (this.state.process) {
      // transaction successed
      case 2:
        return(
          <View >
            <Card>
              <CardSection>
                <Text style={styles.labelStyle}>
                {"姓名：" + this.state.result.name}          
                </Text>
              </CardSection>   
              <CardSection>
                <Text style={styles.labelStyle}>
                {"客户号：" + this.state.result.customNo}
                </Text>
              </CardSection>
              <CardSection>
                <Text style={styles.labelStyle}>
                {"身份证号："+this.state.result.idNo}
                </Text>
              </CardSection>
              <CardSection>
                <Text style={styles.labelStyle}>
                {"开卡日期：" + this.state.result.date}
                </Text>
              </CardSection>
              <CardSection>
                <Text style={styles.labelStyle}>
                {"开卡卡号：" + this.state.result.cardNo}
                </Text>
              </CardSection>     
          </Card>
          <View style={styles.parent}> 
            <TouchableHighlight underlayColor='transparent'
              style={styles.buttonStyle}
              onPress={this.onReturn.bind(this)} >        
            <Text style={styles.textStyle}>
               返回
             </Text>
            </TouchableHighlight>
          </View>
          <Spinner show={this.state.process}/>

        </View>
        );
    
      default:
      return(
        <View>
          <IdCardCheck>
          </IdCardCheck>
          <Card>
            <CardSection>
              <Input
                label='身份证号码'
                placeholder='请输入身份证号码'
                onChangeText={ (text)=> this.setState({idNo: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
                label='姓名'
                placeholder='请输入姓名'
                onChangeText={ (text)=> this.setState({name: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
                label='卡号'
                placeholder='请输入卡号'
                onChangeText={ (text)=> this.setState({cardNo: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
                label='密码'
                placeholder='请输入密码'
                onChangeText={ (text)=> this.setState({password: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
                label='确认密码'
                placeholder='请再次输入密码'
                onChangeText={ (text)=> this.setState({confirmPassword: text}) }
              />
            </CardSection>
          </Card>

          <ButtonSet
            onPress1={this.onSubmit.bind(this)}
            onPress2={this.onReturn.bind(this)}
          />
          
          <Spinner show={this.state.process}/>

        </View>
      );

    }
  }

  render() {
    console.log('render called');
    return this.renderScene();
  }
}


function mapStateToProps(state){
  console.log(state.openCard.process);
  return {result: state.openCard.response,process:state.openCard.process}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ openCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenCard);

var styles = StyleSheet.create({ 
   parent:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:50,
    marginRight:50,
  },
  labelStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },   
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#0af',
    width:300,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
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
    backgroundColor:'black',
  },

});