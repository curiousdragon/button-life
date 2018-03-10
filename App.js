
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0,
    counterSAT: 0,
    passFirstWeek: false,
    isFullScore: false,
  };

  render() {
    return (
      <View style={styles.container}>
        {(() => {
          if (!this.state.passFirstWeek) {
            return <Button title="Do homework"
               onPress={this._handlePress.bind(this)} 
               style={styles.button}>
             </Button>
          } else {
            return //<View style={styles.container}>
                /*<Button title="Do homework"
                  onPress={this._handlePress.bind(this)} 
                  style={styles.button}>
                </Button>*/
                
                <Button title="SAT Prep"
                  onPress={this._handlePress.bind(this)} 
                  style={styles.button}>
                </Button>
                /*<Text>
                  SAT score: {this.state.counterSAT}
                </Text>
              //</View>*/
              
          }
        })()}
      </View>
    );
  }

  _handlePress(event) {
    this.setState({
      counter: this.state.counter + 1
      if(this.state.passFirstWeek) {
        counterSAT: this.state.counterSAT + 1
      }
    });
    console.log('Click', this.state.counter);

    if(this.state.counter==6) { //will change on 7
      this.setState({
        passFirstWeek: true
      })
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f00',
  }
});





/*
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0,
    isFullScore: false,
  };

  render() {
    return (
      <View style={styles.container}>
        {(() => {
          if (!this.state.isFullScore) {
            return <Button title="Fill out the scantron"
               onPress={this._handlePress.bind(this)} 
               style={styles.button}>
             </Button>;
          } else {
            console.log('WORK')
            return <Button title="Do community service"
               onPress={this._handlePress.bind(this)} 
               style={styles.button}>
             </Button>
          }
        })()}
        
        <Text>
        SAT score: {this.state.counter}
        </Text>
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
        isFullScore: true
      })
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f00',
  }
});
*/
