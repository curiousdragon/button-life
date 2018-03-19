import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import COLORS from './colors';

// export means other files can call on it if they import it
// default means that when you export it, you dont need braces:
//  ex: export GameOver from './GameOver.js'
//  also it doesn't matter what you call it such as:
//  ex: export GameOverThingy from './GameOver.js'
//  if there are two classes in the js file
//  only one class can be default
//  and the other class must be in braces when exporting
//  ex: export { NotGameOver } from './GameOver.js'

//can call the class anything 
export default class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.hwLevel = 6;
    this.serLevel = 4;
    this.level = -1;
    if(props.allCounters['homework']>this.hwLevel) {
      this.level++;
    }

    if(props.allCounters['service']>this.serLevel) {
      this.level++;
    }

  }

  render() {
    let text;
    if (this.level === -1) {
      text = 'You have been rejected from every college. ';
    } else if (this.level === 0) {
      text = 'You have been accepted to the College of Mediocracy.';
    } else {
      text = `

You have been accepted to Tree Farm University. 
Excellent work.
We toast to you, the future of humanity.
      `;
    }
    return (
      <View style={styles.container}>
        <Text>Congrats! {text}</Text>
        <View style={styles.containerStats}>
          <Text>Your stats:</Text>
          <Text>Amount of homework done: {this.props.allCounters['homework']}</Text>
          <Text>Hours of community service done: {this.props.allCounters['service']}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button title='Do more college-ing'
            onPress={this._handlePress.bind(this)} 
            style={styles.button}>
          </Button>
        </View>
      </View>
      );
  }

  _handlePress(event) {
    this.props.reset();
  }

}




/*
<Text>
                  You have been rejected from every college. 
                  //Your college counselors have sighed in defeat.
                  //Your parents have informed you that you must begin paying for rent.
                  //Tough luck man. 
                  //Better luck next time!
                </Text>
              </View>);
          } else if(this.state.level == 0) {
            return(
              <View>
                <Text>
                  You have been accepted to the College of Mediocracy.
                  //Your college counselors are both disappointed and slightly appeased.
                  //Your parents have informed you that you must pay for your own tuition.
                  //Not bad.
                  //See if you can get better next time!
                </Text>
              </View>);
          }
          return(
            <View>
              <Text>
                You have been accepted to Tree Farm University. 
                //Your college counselors have fainted from surprise.
                //Your parents have informed you that you must pay for... nothing!
                Excellent work.
                Congrats to you, the future of humanity.
              </Text>
              */









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
    margin: 20,
  },
  containerStats: {
    flex: 0.25,
    alignItems: 'flex-start',
    margin: 20,
  },
  containerButton: {
    flex: 0.25,
    flexDirection: 'column',
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
});

