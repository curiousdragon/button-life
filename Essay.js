import React from 'react';
import { StyleSheet, Text, View, Button , Picker } from 'react-native';


import COLORS from './colors';

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
    return{
      language: "Java"
    }
  }

	render() {
		return(
			<View style={styles.container}>

        <Text>{this.renderTemplate2()}</Text>

        <View style={styles.containerButton}>
          <Button title='I am done with my essay'
            onPress={this._handlePress.bind(this)} 
            style={styles.button}>
          </Button>
        </View>

        <Text>Word Bank</Text>
        <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 200 }}
        mode='dialog'
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        
        {this.words.map((word) => {
             return <Picker.Item key={word.str} label={word.str} value={word.str} />
          })}

        </Picker>
			</View>
      );
	}

	_handlePress(event) {
    //this.props.reset();
	}

  renderTemplate() {
    this.template.lines.forEach((line) => {

    });

    return (
      <View style={styles.container}>
        {(() => {

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
    paddingLeft: 40,
    paddingRight: 40,
  },
});