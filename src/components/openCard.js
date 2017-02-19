import React, { Component } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';
// import styles from '../styles/style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCard } from '../actions/openCardAction';


const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=helloworld';

class OpenCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      cardNo:'',
      password:'',
      error: '',
      result: '',
      process: 0
    }

  }
  // async onSubmit(){
  //  console.log('submit button pressed');
  //  const url = 'https://reduxblog.herokuapp.com/api/posts';
  //  let response = await fetch(url);
  //  let res = await response.text();
  //  console.log(res);
  // }

  onSubmit(){
   this.props.openCard();
  //  this.setState({process:1});
  }

  onReturn(){
    this.props.navigator.pop();
  }

  renderScene(){
    switch (this.props.process) {
      case 0:
        return(
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                 卡号:
               </Text>
               <TextInput
                 onChangeText={ (text)=> this.setState({cardNo: text}) }
                 style={styles.input} placeholder="请刷卡">
               </TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                 密码:
               </Text>
               <TextInput
                 onChangeText={ (text)=> this.setState({password: text}) }
                 style={styles.input} placeholder="请输入密码">
               </TextInput>
            </View>
            <Text>{this.state.cardNo}</Text>
            <View style={styles.btnContainer}>
              <Button
                 style={styles.button}
                 onPress={this.onSubmit.bind(this)}
                 title="提交"
                 color="#841584"
               />
               <Button
                 style={styles.button}
                 onPress={this.onReturn.bind(this)}
                 title="返回"
                 color="#841584"
               />
            </View>
            <Text>{JSON.stringify(this.props.result)}</Text>

          </View>
        );
        break;
        case 1:
          return(
            <Text>{JSON.stringify(this.props.result)}</Text>
          );
        break;
      default:
        return(
          <Text>default</Text>
        );

    }
  }

  render() {
    console.log('render called');
    return this.renderScene();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    padding:10,
  },
  btnContainer: {
    flexDirection: 'row',
    padding:10,
    justifyContent: 'center'
  },
  input: {
    height: 30,
    fontSize: 18,
    borderWidth: 1,
    flex:3,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#48bbec',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  label: {
    flex:1,
    fontSize: 18
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

function mapStateToProps(state){
  console.log(state.openCard.process);
  return {result: state.openCard,process:state.openCard.process}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ openCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenCard);
