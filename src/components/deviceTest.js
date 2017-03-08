import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,Image
} from 'react-native';
var ImagePicker = require('react-native-image-picker');

import GeitDevice from './GeitDevice';


//连接设备
const onConnectClick = (e)=>{
  GeitDevice.connect((rc,msg)=>{
    if(rc){
      Alert.alert("成功",msg);
    }else{
      Alert.alert("失败",msg);
    }
    awesomeProject.setState({ text: msg });
  });
};

//断开设备
const onDisConnectClick = (e)=>{
  GeitDevice.disconnect();
   awesomeProject.setState({ text: "设备断开" });
};

//读取IC卡
const onReadICCardClick = (e)=>{
  GeitDevice.ICCard.readIcCard((rc,data)=>{
    if(rc){
      Alert.alert("成功",data.id);
    }else{
      Alert.alert("失败",data.errmsg);
    }
    awesomeProject.setState({ text: data.errmsg });
  });
};

//读取二代证
const onReadIDCardClick = (e)=>{
  GeitDevice.IDCard.readIdCard((rc,data)=>{
     if(rc){
      Alert.alert("成功",data.Id);
      var source = {uri:"file://"+data.PhotoUrl};
      awesomeProject.setState({avatarSource: source, text: data.Name+"\n"+data.Id+"\n"+data.Sex+"\n"+data.Address+"\n"+data.Nation+"\n"+data.Issuer+"\n"+data.ValidDateBegin+"\n"+data.ValidDateEnd+"\n"+data.PhotoUrl});
    }else{
      Alert.alert("失败",data.errcode+data.errmsg);
    }
    
  });
};

//读取磁条卡
const onReadMagCardClick = (e)=>{
  try{
  GeitDevice.MagCard.readMagCard((rc,data)=>{
    if(rc){
        Alert.alert("成功",data.Track2);
        awesomeProject.setState({ text: data.Track2 });
     }else{
       Alert.alert("失败",data.errcode+data.errmsg);
     }


  });
}catch(e){
   Alert.alert("error",e.message);
}
};

//输放密码
const onInputPwdClick = (e)=>{
  GeitDevice.PinPad.getPinBlock(6,"",false,(rc,data)=>{
     if(rc){
        Alert.alert("成功",data);
        awesomeProject.setState({ text: data});
     }else{
       Alert.alert("失败",data);
     }
  });
};

//读取指纹
const onReadFinglerClick = (e)=>{
  GeitDevice.Fingler.readFinger((rc,data)=>{
    if(rc){
        Alert.alert("成功",data);
        awesomeProject.setState({ text: data});
     }else{
       Alert.alert("失败",data);
     }
  });
};

//拍照
const onGetPhotoClick = (e)=>{
    var options = {
    title:"获取影像资料",
    takePhotoButtonTitle:"拍照",
    chooseFromLibraryButtonTitle:"从图库选择",
    cancelButtonTitle:"取消",
    mediaType:"photo"
  };

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info below in README)
   */
  //ImagePicker.launchCamera (options, (response) => {
  ImagePicker.showImagePicker(options, (response) => {
    //console.log('Response = ', response);

    if (response.didCancel) {
      //console.log('User cancelled image picker');
    }
    else if (response.error) {
      //console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      //console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      awesomeProject.setState({
        avatarSource: source,text:source.uri
      });
    }
  });
};

var awesomeProject=null;

class DeviceTest extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "测试程序",avatarSource:null };
		awesomeProject=this;
	}
	
	//连接设备
  onConnectClick(e){
    //var _this=this;
    //_this.setState({ text: msg });
    GeitDevice.connect((rc,msg)=>{
      Alert.alert(msg,msg);
     awesomeProject.setState({ text: msg });
    });
  }
  
  onReturn(){
    this.props.navigator.pop();
  }
  
	
  render() {
    let display = this.state.text;
    return (
      <View style={{flex:1,flexDirection:"row"}}>
      <View style={{width:50}}><Text style={{flex:1,textAlign:"center",fontSize:32,color:"red",backgroundColor:"black"}}>国光移动设备测试程序</Text></View>
      <View style={styles.container}>
        <Button style={styles.button}
          onPress={this.onConnectClick}
          title="连接设备"
          color="#00FF0F"
        />
      
        <Button  style={styles.button}
           onPress={onDisConnectClick}
          title="断开设备"
          color="#840022"
        />
      
        <Button  style={styles.button}
          onPress={onReadICCardClick}
          title="读取IC卡"
          color="#FFF004"
        />

        <Button  style={styles.button}
          onPress={onReadIDCardClick}
          title="读取二代证"
          color="#800544"
        />
      
        <Button  style={styles.button}
          onPress={onReadMagCardClick}
          title="读取磁条卡"
          color="#FF15FF"
        />

        <Button  style={styles.button}
          onPress={onInputPwdClick}
          title="输入密码"
          color="#001500"
        />

        <Button  style={styles.button}
          onPress={onReadFinglerClick}
          title="获取指纹"
          color="#84FF00"
        />

        <Button  style={styles.button}
          onPress={onGetPhotoClick}
          title="获取照片"
          color="#84FFFF"
        />
		<Button
              onPress={this.onReturn.bind(this)}
              title="返回"
              color="#841584"
            />
        
        <View style={{flex:1,flexDirection:"row",height:300}}>
          
         <Text style={{flex:1,color: 'red',backgroundColor: 'powderblue',fontSize: 32}}>
            {display}
          </Text>
           <View style={{flex:1,flexDirection:"row",backgroundColor: 'gray'}}>
            <Image source={this.state.avatarSource} style={{flex:1,resizeMode:"contain"}}/>
           </View>
        </View>
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1
  },
  button: {
    flex:1,
    fontSize: 20
  }
});

export default DeviceTest;
