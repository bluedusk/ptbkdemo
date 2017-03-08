import React, { Component } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TouchableHighlight,
  Image
} from 'react-native';
// import styles from '../styles/style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { idCardCheck } from '../../actions/idCardCheckAction';

import { Input, Card, CardSection, ButtonSet, Spinner } from '../../components/common';

// process : [0,1,2,3] = [initState, transactionBegin, transactionFinished]

class IdCardCheck extends Component {

  constructor(props){
    console.log("IdCardCheck constructor called");
    super(props);
    this.state = {
      cardNo:'',
      password:'',
      error: '',
      result: '',
      process: 0,
      show:false,
      url:'http://rap.taobao.org/mockjsdata/14551/idcheck',
      idNo:'123456789012345678',
      name:'考拉',
    }

  }

  componentWillReceiveProps(props){
    this.setState({process:props.process, result:props.result});
  }

  onSubmit(){
    this.props.idCardCheck(this.state); // trigger action creator
    this.setState({process:1});
  }

  showModal(){
    this.setState({show:true});
  }

  onReturn(){
    this.props.navigator.pop();
  }

  // 显示/隐藏 modal
  _setModalVisible() {
    let isShow = this.state.show;
    this.setState({
      show:!isShow
    });
  }

  renderScene(){
    switch (this.state.process) {
      // transaction successed
      case 2:
        return(
          <View style={styles.parent}>
            <TouchableHighlight underlayColor='transparent'
              style={styles.buttonStyle}
              onPress={this.showModal.bind(this)} >        
              <Text style={styles.textStyle}>
                身份证联网核查
              </Text>
            </TouchableHighlight>       
            <Modal
              transparent={true}
              visible={this.state.show}
              onShow={() => {}}
              onRequestClose={() => {}} >
              <View style={styles.modalStyle}>
                  
                <View style={styles.subView}>
                  <Image 
                    source={require('./idcard.jpg')}
                    style={styles.image}
                  />
                  <Text style={styles.titleText} >
                    {"姓名：考拉"}
                  </Text>
                  <Text style={styles.titleText} >
                    {"身份证号：123456789012345678"}
                  </Text>
                  <Text style={styles.titleText} >
                    {"有效期：20270301"}
                  </Text>
                  <Text style={styles.titleText} >
                    {"性别：男"}
                  </Text>
                  <Text style={styles.titleText} >
                    {"地址：北京市丰台区丽泽路金唐国际金融大厦"}
                  </Text>
                  <Text style={styles.titleText} >
                    {"生日：19910301"}
                  </Text>
                  <View style={styles.horizontalLine} />              
                  <View style={styles.buttonView}>
                    <Button
                        title='联网验证'
                        style={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        onPress={this.onSubmit.bind(this)} />
                  </View> 
                </View>
                  
                <View style={styles.subView}>
                  <Image 
                    source = {{uri:this.state.result.imgurl}}
                    style={styles.image}
                  />
                  <Text style={styles.titleText} >
                    {"姓名：" + this.state.result.name}
                  </Text>
                  <Text style={styles.titleText} >
                    {"身份证号：" + this.state.result.idNo}
                  </Text>
                  <Text style={styles.titleText} >
                    {"有效期：" + this.state.result.validDate}
                  </Text>
                  <Text style={styles.titleText} >
                    {"性别：" + this.state.result.sex}
                  </Text>
                  <Text style={styles.titleText} >
                    {"地址：" + this.state.result.address}
                  </Text>
                  <Text style={styles.titleText} >
                    {"生日：" + this.state.result.birthday}
                  </Text>
                  <View style={styles.horizontalLine} />
                  <View style={styles.buttonView}>
                    <Button
                      title='验证通过'
                      style={styles.buttonStyle}
                      textStyle={styles.textStyle}
                      onPress={this._setModalVisible.bind(this)} />
                  </View>        
                </View> 
              </View> 
            </Modal>  
          </View>
            
        );
      default:
      return(
        <View style={styles.parent}>
          <TouchableHighlight underlayColor='transparent'
             style={styles.buttonStyle}
             onPress={this.showModal.bind(this)} >        
            <Text style={styles.textStyle}>
               身份证联网核查
             </Text>
          </TouchableHighlight>
          <Modal
            transparent={true}
            visible={this.state.show}
            onShow={() => {}}
            onRequestClose={() => {}} >
            <View style={styles.modalStyle}>             
              <View style={styles.subView}>
                <Image 
                  source={require('./idcard.jpg')}
                  style={styles.image}
                />
                <Text style={styles.titleText} >
                  {"姓名：考拉"}
                </Text>
                <Text style={styles.titleText} >
                  {"身份证号：123456789012345678"}
                </Text>
                <Text style={styles.titleText} >
                  {"有效期：20270301"}
                </Text>
                <Text style={styles.titleText} >
                  {"性别：男"}
                </Text>
                <Text style={styles.titleText} >
                  {"地址：北京市丰台区丽泽路金唐国际金融大厦"}
                </Text>
                <Text style={styles.titleText} >
                  {"生日：19910301"}
                </Text>
                  <View style={styles.horizontalLine} />
                  <View style={styles.buttonView}>
                    <Button
                      title='联网验证'
                      style={styles.buttonStyle}
                      textStyle={styles.textStyle}
                      onPress={this.onSubmit.bind(this)} />
                  </View>

              </View>         
                
            </View>             
          </Modal>      
        </View>
   
      );

    }
  }

  render() {
    console.log('IdCardCheck render called');
    return this.renderScene();
  }
}


function mapStateToProps(state){
  return {result: state.idCardCheck.response, process:state.idCardCheck.process}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ idCardCheck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdCardCheck);

// css样式
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECECF0',
  },
  parent:{
    alignItems: 'center',
    justifyContent:'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  // modal的样式
  modalStyle: {
    //backgroundColor:'#ccc',
    marginLeft:100,
    marginRight:100,
    marginTop:50,
    marginBottom:100,  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },

  // modal上子View的样式
  subView:{
    paddingLeft:20,
    paddingRight:20,
    paddingTop:50,
    paddingBottom:50,
    backgroundColor:'#D8F7FF',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'#fff',
  },
  // 竖直的分割线
  verticalLine:{
    width:0.5,
    height:10,
    backgroundColor:'#ccc',
  },
  //图片样式
  image:{
    width: 150,
    height: 150
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    margin:8,
    fontSize:14,
    textAlign:'center',
  },
  // 按钮
  buttonView:{
    flexDirection: 'column',
  },
 buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#0af',
    width:300,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 50,
    marginRight: 50
    // padding:20
  },
  // 竖直的分割线
  buttonverticalLine:{
    width:0.5,
    height:44,
    backgroundColor:'#ccc',
  },
  buttonText:{
    fontSize:16,
    color:'#3393F2',
    textAlign:'center',
  },
});