import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GameOver from './GameOver';

class ButtonAndCounter extends React.Component {
  state = {
    counter: 0
  }; 

  constructor(props) {
    super(props);
  }

  _handlePress(event) {
    this.setState({
      counter: this.state.counter + 1
    });

    console.log('Pressed', this.state.counter);

    if(this.state.counter == this.props.maxCounter) {
      this.props.onReachedMax();
    }
    this.props.onCounterIncrement();

  }

  render() {
    return (
      <View style={styles.containerButton}>
        <Button title={this.props.titleButton}
          onPress={this._handlePress.bind(this)} 
          style={styles.button}>
        </Button>
        <Text>
          {this.props.counterText}: {this.state.counter}
        </Text>
      </View>
    );
  }
}


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      counterTotal: 0,
      allCounters: {
        homework: 0,
        service: 0,
        study: 0,
      },
      hwFirstWeek: false,
      serFirstWeek: false,
    };
  }

  reset() {
    this.setState(this.getInitialState());
  }

  incrementTotalCounter() {
    this.setState({
      counterTotal: this.state.counterTotal + 1
    })
  }

  incrementSubCounter(counterName) {
    const counters = this.state.allCounters;
    counters[counterName] += 1;
    this.setState({
      allCounters: counters
    })
  }

  render() {
    let total = 1;
    if(this.state.counterTotal==total) {
      return(
        <GameOver allCounters={this.state.allCounters}
        reset= {()=>{this.reset()}}/>
        );
    }

    return (
      <View style={styles.container}>
        <Text>On your path to college.</Text>
        <Text></Text>
        <Text>Days left until the Reckoning: {total-this.state.counterTotal}</Text>
        <ButtonAndCounter onReachedMax={() => {
          this.setState({
          hwFirstWeek: true
            });
          }}
          onCounterIncrement={() => {
            this.incrementTotalCounter();
            this.incrementSubCounter('homework');
          }}
          counterText='Homework done'
          titleButton='Do homework'
          maxCounter={4}>
        </ButtonAndCounter>

      {(() => {


        if(this.state.hwFirstWeek) {
          return (
            <ButtonAndCounter onReachedMax={() => {
                this.setState({
                  serFirstWeek: true
                });
              }}
              onCounterIncrement={() => {
                this.incrementTotalCounter();
                this.incrementSubCounter('service');
              }}
              counterText='Hours volunteered'
              titleButton='Do community service'
              maxCounter={4}>
            </ButtonAndCounter>
          );
        }
      })()}

        <View style={styles.clickCounter}>
          <Text>
            Clicks: {this.state.counterTotal}
          </Text>
          <Text>homework: {this.state.allCounters['homework']}</Text>
        </View>

      </View>
    );

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
  containerButton: {
    flex: 0.25,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  clickCounter: {
    flex: 0.25,
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 200,
    padding: 20,
  },
  button: {
    backgroundColor: '#f00',
  }
});

