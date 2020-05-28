import {AppRegistry, View, Text} from 'react-native';
import React, {Component} from 'react';
class App extends Component {
  render() {
    return (
      <View>
        <Text>Its my First app</Text>
      </View>
    );
  }
}

// The entry file for mobile is 1 level higher ...

const appName = 'VisitorTracker';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
