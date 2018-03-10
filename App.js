import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0,
    hwFirstWeek: false,
  };

  render() {
    return (
      <View style={styles.container}>
      {(() => {
        if (!this.state.hwFirstWeek) {
          return (
            <View style={styles.container}>
              <Button title="Do homework"
                onPress={this._handlePress.bind(this)} 
                style={styles.button}>
              </Button>
            </View>
          );
        } else {
          return (
            <View style={styles.container}>
              <Button title="Do community service"
                onPress={this._handlePress.bind(this)} 
                style={styles.button}>
              </Button>
            </View>
          );
        }
      })()}
        <View style={styles.clickCounter}>
        <Text>
          Clicks: {this.state.counter}              Homework done: {this.state.counter}
        </Text>
        </View>
      </View>
    );
  }

  _handlePress(event) {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log('Pressed', this.state.counter);

    if(this.state.counter==4) {
      this.setState({
        hwFirstWeek: true
      })
    }
    
  }
}

//justifyContent = vertically
//  flex-start = top
//  center = center
//  flex-end = bottom

//alignItems = horizantally
//  flex-start = left
//  center = center
//  flex-end = right

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickCounter: {
    flex: 0.5,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f00',
  }
});

