import React, { Component } from 'react';
import { Button, View, StyleSheet, Image, Text } from 'react-native';
import { MenuBtn } from '../components/common';

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
        <View style={styles.menuBtnContainer}>
          <MenuBtn
            onPress={this.onPressLearnMore.bind(this,1)}
            imgSource={require('../assets/images/1487664013_gallery.png')}>
            借记卡开卡
          </MenuBtn>
          <MenuBtn
            onPress={this.onPressLearnMore.bind(this,2)}
            imgSource={require('../assets/images/1487664033_like.png')}>
            签约电子银行
          </MenuBtn>
          <MenuBtn
            onPress={this.onPressLearnMore.bind(this,3)}
            imgSource={require('../assets/images/1487664043_games.png')}>
            组件测试
          </MenuBtn>
          <MenuBtn
            onPress={this.onPressLearnMore.bind(this,4)}
            imgSource={require('../assets/images/1487664051_settings.png')}>
            设备测试
          </MenuBtn>
          <MenuBtn
            imgSource={require('../assets/images/1487664060_navigation.png')}>
            借记卡开卡
          </MenuBtn>
        </View>

    );
  }
}

const styles = StyleSheet.create({

  menuBtnContainer: {
    paddingTop: 30,
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
  }

});


export default Main;
