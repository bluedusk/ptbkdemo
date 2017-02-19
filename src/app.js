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
import OpenCard from './components/openCard';
import SignEbank from './components/signEbank';
import {Header} from './components/common/Header';

class App extends Component {

  renderScene(route, navigator){
          console.log("render route id = "+route.id);
          switch (route.index) {
            case 0:
              return <Main title={route.title} navigator={navigator}/>
              break;
            case 1:
              return <OpenCard title={route.title} navigator={navigator}/>
              break;
            case 2:
              return <SignEbank title={route.title} navigator={navigator}/>
              break;
            default:
              return <Text>Something went wrong.</Text>
      }
    }

  render() {

    const routes = [
         {title: 'Main', index: 0},
         {title: 'Open Card', index: 1},
         {title: 'Sign Ebank', index: 2},
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
