import React, { Component } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
// import styles from '../styles/style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCard } from '../actions/openCardAction';
import { Input, Card, CardSection, ButtonSet, Spinner } from '../components/common';

// process : [0,1,2,3] = [initState, transactionBegin, transactionFinished]

class OpenCard extends Component {

  constructor(props){
    console.log("constructor called");
    super(props);
    this.state = {
      cardNo:'',
      password:'',
      error: '',
      result: '',
      process: props.process
    }

  }

  componentWillReceiveProps(props){
    this.setState({process:props.process});
  }

  onSubmit(){
   this.props.openCard(); // trigger action creator
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
          <Text>{JSON.stringify(this.props.result)}</Text>
        );
      break;
      default:
      return(
        <View>
          <Card>
            <CardSection>
              <Input
              label='hello'
              placeholder='please input'
              />
            </CardSection>
            <CardSection>
              <Input
              label='卡号'
              placeholder='请刷卡'
              onFocus={this.onCardNumFocus}
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

            {/* <Text>{this.state.cardNo}</Text>

            <Text>{JSON.stringify(this.props.result)}</Text> */}
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
  return {result: state.openCard,process:state.openCard.process}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ openCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenCard);
