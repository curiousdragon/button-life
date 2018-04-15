import React from 'react';
import { StyleSheet, Text, View, Button , Picker } from 'react-native';

import COLORS from './colors';
//import Score from './Score';
import * as Word from './Word';


export default class Essay extends React.Component {
	constructor(props) {
		super(props);

    //let {template: this.template, words: this.words} = Word.getTemplateAndWords();
    let result = Word.getTemplateAndWords();
    this.template = result.template;
    this.words = result.words;

    this.state = this.getInitialState();
	}

  getInitialState() {
    let blankStates = {};
      this.template.lines.forEach((line, i) => {
        blankStates[i] = 'blank';
      });

    return {
      blankIndex: 0,
      blankAnswer: '',
      blankStates: blankStates,
      getScore: false,
    }
  }

	render() {
    if(this.state.getScore) {
      //return (<Score essGame=true reset= {()=>{this.reset()}}/>);
    }

		return(
			<View style={styles.container}>

        {this.renderTemplate(this.state.blankStates)}

        <View style={styles.container}>
        <Text>Word Bank</Text>
        <Text>Blank number: {this.state.blankIndex}</Text>
        <Text>Selected word: {this.state.blankAnswer}</Text>
        <Picker
        selectedValue={this.state.blankAnswer}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => {
          let newBlankStates = this.state.blankStates;
          newBlankStates[this.state.blankIndex] = itemValue;
          this.setState({
            blankAnswer: itemValue,
            blankStates: newBlankStates
          });
        }}>
        
        {this.words.map((word) => {
             return <Picker.Item key={word.str} label={word.str} value={word.str} />
          })}

        </Picker>
        </View>

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
    this.setState({getScore: true});
	}

  renderTemplate(blankStates) {
    return (
      <View style={styles.container}>
        {this.template.lines.map((line, i) => {
          return (
              <View key={i}>
              <Text style={{fontSize: 18}}>{line}</Text>
              <Button title={blankStates[i]}
                onPress={() => this.setState({blankIndex: this.template.lineIndexes[line]})}
                style={styles.containerButton}>
              </Button>
              </View>
            )
        })}
      </View>
      );
  }

  renderTemplate2() {
    let text = '';
    this.template.lines.forEach((line) => {
      text += line + ' ___ ';
    });

    return text;
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
  },
});