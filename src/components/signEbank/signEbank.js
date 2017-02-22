import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Input, Card } from '../../components/common'

class SignEbank extends Component {

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
  onSubmit(){
   console.log('button pressed');
  }

  onReturn(){
    this.props.navigator.pop();
  }

  render() {
    return (

      <View>
        <Card>
          <Input
            onChangeText={ (text)=> this.setState({cardNo: text}) }
            style={styles.input} placeholder="请刷卡">
          </Input>

        </Card>


          <View>
            <Button
              onPress={this.onSubmit}
              title="提交"
              color="#841584"
            />
            <Button
              onPress={this.onReturn.bind(this)}
              title="返回"
              color="#841584"
            />
          </View>
      </View>



    );
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

export default SignEbank;
