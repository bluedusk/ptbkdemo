import React, { Component } from 'react';
import { Button, View } from 'react-native';

class Main extends Component {

  constructor(props){
    console.log(props);
    super(props);

    this.state = {};
  }

  onPressLearnMore(index){
   console.log('button pressed');
   this.props.navigator.push({title: 'Open Card', index: index});
  }

  render() {
    return (
        <View>
          <Button
            onPress={this.onPressLearnMore.bind(this,1)}
            title="借记卡开卡"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onPressLearnMore.bind(this,2)}
            title="签约电子银行"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

    );
  }
}

export default Main;
