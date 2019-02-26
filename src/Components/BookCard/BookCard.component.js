import React, { Component } from 'react';
import {
  View, Text, Image, ScrollView, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './BookCard.style';
import BookAuthorBar from '../BookAuthorBar/BookAuthorBar';
import defaultBookImage from '../../Images/defaultBook.jpg';
// import defaultBook from '../../Images/defaultBook.jpg';

export default class BookCard extends Component {
  // createBookAuthorBar = authors => (
  //   (authors !== undefined && authors !== null)
  //     ? (<BookAuthorBar authorArray={authors} />)
  //     : (<></>)
  // );

  // addSubtitle = subtitle => (
  //   (subtitle !== undefined && subtitle !== null)
  //     ? (<Text adjustsFontSizeToFit numberOfLines={2} style={style.subtitle}>{subtitle}</Text>)
  //     : <></>
  // )


  // addImage = imageLinks => (
  //   (imageLinks === undefined || imageLinks === null || imageLinks.thumbnail === undefined)
  //     ? (
  //       <Image style={style.image} resizeMode="contain" source={deafultBookImage} />)
  //     : (
  //       <Image style={style.image} resizeMode="contain" source={{ uri: imageLinks.thumbnail }} />
  //     ))


  render() {
    const { book } = this.props;
    const { title, imageLinks } = book;
    let {
      subtitle, authors, description,
    } = book;
    subtitle = subtitle || '';
    authors = authors || [];
    description = description || '';
    const imageSource = imageLinks ? { uri: imageLinks.thumbnail } : defaultBookImage;
    return (
      <View style={style.bookCard}>
        <Image style={style.image} resizeMode="contain" source={imageSource} />
        <View style={style.bookDetails}>
          <View>
            <Text adjustsFontSizeToFit numberOfLines={2} style={style.title}>{title}</Text>
            <View style={style.authorNames}>{<BookAuthorBar authorArray={authors} />}</View>
          </View>
          <Text adjustsFontSizeToFit numberOfLines={2} style={style.subtitle}>{subtitle}</Text>
          <View style={style.description}><ScrollView><Text adjustsFontSizeToFit>{description}</Text></ScrollView></View>
        </View>
      </View>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    authors: PropTypes.array,
    description: PropTypes.string,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

// BookCard.defaultProps = {
//   book: {
//     subtitle: 'anything',
//     authors: [],
//     description: 'something more here',
//   },
// };
