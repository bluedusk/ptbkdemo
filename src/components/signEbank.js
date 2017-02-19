import React, { Component } from 'react';
import { Button, View } from 'react-native';

class SignEbank extends Component {

  onSubmit(){
   console.log('button pressed');
  }

  onReturn(){
    this.props.navigator.pop();
  }

  render() {
    return (
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

    );
  }
}

export default SignEbank;
