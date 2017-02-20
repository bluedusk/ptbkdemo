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
      process: props.process,
      loading: false
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
              placeholder='please input'
              onChangeText={ (text)=> this.setState({cardNo: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
              label='密码'
              placeholder='please input'
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
