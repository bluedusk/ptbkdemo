import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

import {
Button,
View,
Navigator,
Text
} from 'react-native';
import Main from './components/main';
import OpenCard from './components/openCard/openCard';
import ComponentTest from './components/componentTest';
import DeviceTest from './components/deviceTest';
import IdCardCheckMenu from './components/idCardCheck/idCardCheckMenu';
import SignEbank from './components/signEbank/signEbank';
import {Header} from './components/common/Header';

class App extends Component {

  renderScene(route, navigator){
          console.log("render route id = "+route.id);
          switch (route.index) {
            case 0:
              return <Main title={route.title} navigator={navigator}/>
            
            case 1:
              return <OpenCard title={route.title} navigator={navigator}/>
            
            case 2:
              return <SignEbank title={route.title} navigator={navigator}/>
            
            case 3:
              return <ComponentTest title={route.title} navigator={navigator}/>
            
            case 4:
              return <DeviceTest title={route.title} navigator={navigator}/>
           
            case 5:
              return <IdCardCheckMenu title={route.title} navigator={navigator}/>
            
            default:
              return <Text>Something went wrong.</Text>
      }
    }

  render() {

    const routes = [
         {title: 'Main', index: 0},
         {title: 'Open Card', index: 1},
         {title: 'Sign Ebank', index: 2},
         {title: 'Component Test', index: 3},
         {title: 'Device Test', index: 4},
         {title: 'IdCard Check Menu', index: 5}
    ];

    return (
      <Provider store={createStore(reducers, applyMiddleware(promise))}>
        <View style={{ flex: 1 }}>
          <Header headerText="Portbank" />
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={this.renderScene.bind(this)}
          />
        </View>
    </Provider>
    );
  }
}

export default App;
