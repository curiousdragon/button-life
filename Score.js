import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import COLORS from './colors';

import { Word, Template } from './Word';


export default class Score extends React.Component {
	constructor(props) {
		super(props);

    this.state.essGame = props.essGame;
	}

  getInitialState() {
    return {
      this.essGame = false;
      this.essGameScore = 0;
    };
  }

	render() {
		return(
			<View style={styles.container}>
        <View style={styles.containerButton}>
          <Button title='I am done with my essay'
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