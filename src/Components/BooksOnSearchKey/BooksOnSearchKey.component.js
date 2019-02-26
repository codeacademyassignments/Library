import React, { Component } from 'react';
import {
  Text, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import GetBooksOnSearchKey from '../../Helper/GetBooksOnSearchKey';
import BookCard from '../BookCard/BookCard.component';

export default class BooksOnSearchKey extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Books With searchKey: ${navigation.getParam('searchKey', 'NO-SEARCH-KEY')}`,
  })

  state = {
    searchKey: '',
    booksBasedOnSearchKey: [],
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { searchKey } = this.state;
    if (searchKey === '') {
      const booksOnSearchKey = await GetBooksOnSearchKey(navigation.getParam('searchKey', 'NO-SEARCH-KEY'));
      this.setState({ searchKey: navigation.getParam('searchKey', 'NO-SEARCH-KEY') });
      this.setState({ booksBasedOnSearchKey: booksOnSearchKey.data.items });
    }
  }

  getBookCards = () => {
    const { booksBasedOnSearchKey } = this.state;
    return booksBasedOnSearchKey.reduce((accumulator, current, index) => {
      accumulator.push(<BookCard key={`${current.volumeInfo.title}${index + 2}`} book={current.volumeInfo} />);
      return accumulator;
    }, []);
  }

  render() {
    const { searchKey } = this.state;
    if (searchKey === '') {
      return (
        <Text fontSize={20}>loading...</Text>
      );
    }
    // const books = this.getBookCards();

    return (
      <ScrollView>
        {this.getBookCards()}
      </ScrollView>
    );
  }
}

BooksOnSearchKey.propTypes = {
  navigation: PropTypes.object.isRequired,
};
