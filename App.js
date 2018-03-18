import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ButtonAndCounter extends React.Component {
  state = {
    counter: 0
  }; 


  constructor(props) {
    this.props = props;

  }
  

  _handlePress(event) {
    this.setState({
      counter: this.state.counter + 1
    });

    console.log('Pressed', this.state.counter);

    //if(this.state.counter == this.props.maxCounter) {
      //this.props.onReachedMax();
    //} 
  }

  render() {
    return (
      <View style={styles.containerButton}>
        <Button title='hi'//{this.props.titleButton}
          onPress={this._handlePress.bind(this)} 
          style={styles.button}>
        </Button>
        <Text>
          //{this.props.counterText}: {this.state.counter}
        </Text>
      </View>
    );
  }
}


export default class App extends React.Component {
  state = {
    counter: 0,
    counterHw: 0,
    counterService: 0,
    counterStudy: 0,
    hwFirstWeek: false,
    serFirstWeek: false,
  };

  render() {
    return (
      <View style={styles.container}>
      {(() => {

        if (!this.state.hwFirstWeek) {
          return (
            <ButtonAndCounter 
              maxCounter=4
              titleButton="Do homework"
              onReachedMax={() => {
                this.setState({
                  hwFirstWeek: true
                });
              }}
              counterText="Homework done">
            </ButtonAndCounter>
          );

        } 
          /*else if(!this.state.serFirstWeek) {
          return (
            <View style={styles.containerButton}>
              <View style={styles.containerButton}>
              <Button title="Do community service"
                onPress={this._handlePressSer.bind(this)} 
                style={styles.button}>
              </Button>
              <Text>
                Hours vounteered: {this.state.counterService}
              </Text>
              </View>

              <View style={styles.containerButton}>
              <Button title="Do homework"
                onPress={this._handlePressHw.bind(this)} 
                style={styles.button}>
              </Button>
              <Text>
                Homework done: {this.state.counterHw}
              </Text>
              </View>
            </View>
          );
        } else {
          return (
            <View style={styles.containerButton}>
              <View style={styles.containerButton}>
              <Button title="Study for tests"
                onPress={this._handlePressStu.bind(this)} 
                style={styles.button}>
              </Button>
              <Text>
                Topics reviewed: {this.state.counterStudy}
              </Text>
              </View>

              <View style={styles.containerButton}>
              <Button title="Do community service"
                onPress={this._handlePressSer.bind(this)} 
                style={styles.button}>
              </Button>
              <Text>
                Hours vounteered: {this.state.counterService}
              </Text>
              </View>

              <View style={styles.containerButton}>
              <Button title="Do homework"
                onPress={this._handlePressHw.bind(this)} 
                style={styles.button}>
              </Button>
              <Text>
                Homework done: {this.state.counterHw}
              </Text>
              </View>
            </View>
          );
        }
        */
      })()}

/*
        <View style={styles.clickCounter}>
          <Text>
            Clicks: {this.state.counter}
          </Text>
          <Text>
            Homework done: {this.state.counterHw}
          </Text>

          <Text>
            Hours vounteered: {this.state.counterService}
          </Text>
          <Text>
            Topics reviewed: {this.state.counterStudy}
          </Text>

        </View>
        */

      </View>
    );

  }

/*
  _handlePressSer(event) {
    this.setState({
      counter: this.state.counter + 1
    });

    this.setState({
      counterService: this.state.counterService + 1
    });

    console.log('Pressed', this.state.counter);

    if(this.state.counterService==4) {
      this.setState({
        serFirstWeek: true
      });
    } 
  }

  _handlePressStu(event) {
    this.setState({
      counter: this.state.counter + 1
    });

    this.setState({
      counterStudy: this.state.counterStudy + 1
    });

    console.log('Pressed', this.state.counter);
  }
  */

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
    flex: 0.5,
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

