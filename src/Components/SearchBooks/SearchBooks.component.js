import React, { Component } from 'react';
import {
  TextInput, Button, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './SearchBooks.style';
import backgroundImage from '../../Images/library.jpg';

export default class SearchBooks extends Component {
  state = {
    searchKey: '',
  }

  onSubmit = () => {
    const { navigation } = this.props;
    const { searchKey } = this.state;
    navigation.navigate('BooksOnSearchKey', {
      searchKey,
    });
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={style.outterMostView}>
        <TextInput onEndEditing={this.onSubmit} blurOnSubmit autoCorrect selectionColor="red" style={style.textInput} placeholder="Enter anything related to book" onChangeText={text => this.setState({ searchKey: text })} />
        <Button color="#841584" style={style.searchButton} title="search" onPress={this.onSubmit} />
      </ImageBackground>
    );
  }
}

SearchBooks.propTypes = {
  navigation: PropTypes.object.isRequired,
};
