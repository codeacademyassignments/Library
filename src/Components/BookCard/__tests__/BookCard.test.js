import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Image, Text } from 'react-native';
import BookAuthorBar from '../../BookAuthorBar/BookAuthorBar';
import style from '../BookCard.style';
import BookCard from '../BookCard.component';
import deafultBookImage from '../../../Images/defaultBook.jpg';

const testBookData = {
  title: 'APJ',
  authors: ['J K Rowling'],
  description: 'was great person',
  imageLinks: { thumbnail: 'path/to/file' },
};

describe('BookCard', () => {
  it('should match with old snapshot', () => {
    const tree = renderer.create(<BookCard book={{
      title: testBookData.title, authors: testBookData.authors, description: testBookData.description,
    }}
    />);
    expect(tree).toMatchSnapshot();
  });
});

// describe('addImage', () => {
//   it('should return Image component with default image source', () => {
//     const wrapper = shallow(<BookCard book={{ title: testBookData.title, authors: testBookData.authors, description: testBookData.description }} />);
//     expect(wrapper.instance().addImage(undefined)).toEqual(<Image style={style.image} resizeMode="contain" source={deafultBookImage} />);
//   });
//   it('should return Image component with passed image source', () => {
//     const wrapper = shallow(<BookCard book={{
//       ...testBookData,
//     }}
//     />);
//     expect(wrapper.instance().addImage({ thumbnail: 'path/to/file' })).toEqual(<Image style={style.image} resizeMode="contain" source={{ uri: 'path/to/file' }} />);
//   });
// });


// describe('addSubtitle', () => {
//   it('should not add subtitle when subtitle is undefined or null', () => {
//     const wrapper = shallow(<BookCard book={{
//       ...testBookData,
//     }}
//     />);
//     expect(wrapper.instance().addSubtitle()).toEqual(<></>);
//   });
//   it('should add subtitle when subtitle is some string', () => {
//     const wrapper = shallow(<BookCard book={{
//       ...testBookData,
//     }}
//     />);
//     const subtitle = 'About Great Persons';
//     expect(wrapper.instance().addSubtitle(subtitle)).toEqual(<Text adjustsFontSizeToFit numberOfLines={2} style={style.subtitle}>{subtitle}</Text>);
//   });
// });

// describe('createBookAuthorBar', () => {
//   it('should not create book author bar when undefined or null passed', () => {
//     const wrapper = shallow(<BookCard book={{
//       ...testBookData,
//     }}
//     />);
//     expect(wrapper.instance().createBookAuthorBar()).toEqual(<></>);
//   });
//   it('should add subtitle when subtitle is not undefined or null', () => {
//     const wrapper = shallow(<BookCard book={{
//       ...testBookData,
//     }}
//     />);
//     const authors = ['J K rowling', 'APJ', 'Paulo Coelo'];
//     expect(wrapper.instance().createBookAuthorBar(authors)).toEqual(<BookAuthorBar authorArray={authors} />);
//   });
// });
