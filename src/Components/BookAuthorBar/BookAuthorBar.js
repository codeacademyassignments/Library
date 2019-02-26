import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './BookAuthorBar.style';

export default class BookAuthorBar extends Component {
  getAuthorComponents = (authorArray) => {
    const authorTextArray = authorArray.slice(0, 2).reduce((accumulator, current) => {
      accumulator.push(<Text key={current} style={style.author}>{current}</Text>);
      return accumulator;
    }, []);
    return authorTextArray;// limiting to two
  }

  render() {
    const { authorArray } = this.props;
    return (
      <View style={style.authorNames}>
        {this.getAuthorComponents(authorArray)}
      </View>
    );
  }
}

BookAuthorBar.propTypes = {
  authorArray: PropTypes.array.isRequired,
};
