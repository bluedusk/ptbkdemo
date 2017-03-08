import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image, Alert } from 'react-native';
import { Card, CardSection } from './index';
import Button from 'apsl-react-native-button';

export default class Table extends Component {

  renderTable(){
    const testData = [{label:'hello1',value:'world1'},{label:'hello2',value:'world2'},{label:'hello3',value:'world3'}];
    const tableData = this.props.data;
    return tableData.map((item)=>{
      return(
        <CardSection key={item.label+item.value}>
          <View style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </CardSection>
      );
    })
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <View style={styles.row}>
              <Text style={styles.header}>交易成功</Text>
            </View>
          </CardSection>

          {this.renderTable()}

        </Card>
        <View style={styles.btnContainer}>
          <Button
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
            isLoading={false}
            onPress={this.props.onReturn}
            >
            完 成
          </Button>
        </View>
      </View>


    );
  }
}


const styles = {
  table: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red',
    margin:15,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  row: {
    // height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  label: {

    paddingLeft: 20,
    height: 80,
    borderRightWidth: 1,
    borderColor: '#ddd',
    fontSize:25,
    textAlignVertical: 'center',

    // alignItems: 'center',
    // justifyContent: 'center',
    flex:1,
    // borderWidth: 1,
    // borderColor: 'red'

  },
  header:{

    height: 80,
    borderRightWidth: 1,
    borderColor: '#ddd',
    fontSize:25,
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  value: {
    paddingLeft: 20,

    height: 80,
    // borderWidth: 1,
    // borderColor: 'red',
    textAlignVertical: 'center',
    fontSize:25,
    flex:3
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#0af',
    width:150,
    // borderRadius: 5,
    // borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5
    // padding:20
  },
  btnContainer: {
    flexDirection: 'row',
    padding:20,
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
