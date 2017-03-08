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
import { signEBank } from '../../actions/signEBankAction';
import { Input, Card, CardSection, ButtonSet, Spinner } from '../../components/common';

// process : [0,1,2,3] = [initState, transactionBegin, transactionFinished]
class SignEbank extends Component {

  constructor(props){
    console.log("constructor called");
    super(props);
	
	console.log('propsProcess',props.process);
    this.state = {
		idNo: '',
		customName: '',
		cardNo: '',
		pwd: '',
		keyType: '',
		keyNo: '',
		error: '',
		result: '',
		process: props.process
    }

  }
  
  componentWillReceiveProps(props){
	  console.log('componentWillReceiveProps');
    this.setState({process:props.process});
  }
  
  onSubmit(){
    console.log('onSubmit');
   this.props.signEBank(this.state); // trigger action creator
   this.setState({process:1});
   let currentProcess =  this.state.process;
	console.log('onSubmit currentProcess', currentProcess);
  }

  onReturn(){
	this.setState({process:0});
	let currentProcess =  this.state.process;
	console.log('onReturn currentProcess', currentProcess);
    this.props.navigator.pop();
	this.setState({process:0});
	currentProcess =  this.state.process;
	console.log('onReturn currentProcess', currentProcess);
	
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
	let renderProcess =  this.state.process;
	console.log('renderProcess', renderProcess);
	  
    switch (this.state.process) {
      // transaction successed
      case 2:
		
		let httpResult = this.props.result;
		console.log('renderScene result',httpResult);
		
//		let response = this.props.result.response;
//		console.log('renderScene response',response);
		
		var jsonRes = JSON.parse(httpResult); 
		console.log('renderScene jsonRes',jsonRes);
        return(
			<View>
			<Card>
				<CardSection>
					<Text>姓名：{jsonRes.customName}</Text>
				</CardSection>										
				<CardSection>
					<Text>卡号：{jsonRes.cardNo}</Text>
				</CardSection>					
				<CardSection>
					<Text>签约类型：{jsonRes.signType}</Text>
				</CardSection>
				<CardSection>
					<Text>签约信息：{jsonRes.signResult}</Text>
				</CardSection>
				<CardSection>
					<Button
						onPress={this.onReturn.bind(this)}
						title="返回"
					/>
				</CardSection>
			</Card>
			</View>
			
        );
    //  break;
      default:
      return(
        <View>
          <Card>
            <CardSection>
              <Input
              label='身份证'
              placeholder='请输入身份证号'
			  onChangeText={ (text)=> this.setState({idNo: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
              label='姓名'
              placeholder='请输入姓名'
              onChangeText={ (text)=> this.setState({customName: text}) }
              />
            </CardSection>
			<CardSection>
              <Input
              label='卡号'
              placeholder='请刷卡'
              onChangeText={ (text)=> this.setState({cardNo: text}) }
              />
            </CardSection>
            <CardSection>
              <Input
              label='密码'
              placeholder='请输入密码'
              onChangeText={ (text)=> this.setState({pwd: text}) }
              />
            </CardSection>
			<CardSection>
              <Input
              label='K宝类型'
              placeholder='请选择K宝类型'
              onChangeText={ (text)=> this.setState({keyType: text}) }
              />
            </CardSection>
			<CardSection>
              <Input
              label='K宝编号'
              placeholder='请输入K宝编号'
             onChangeText={ (text)=> this.setState({keyNo: text}) }
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
  console.log(state.process);
  return {result: state.signEBank.response,process:state.signEBank.process}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signEBank }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignEbank);