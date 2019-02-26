import renderer from 'react-test-renderer';
import React from 'react';
import { Text } from 'react-native';
import BookAuthorBar from '../BookAuthorBar';
import style from '../BookAuthorBar.style';

const authorNameArray = ['J K Rowling', 'Paulo Coelho', 'Will Smith'];

describe('BookAuthorBar', () => {
  it('should match old snapshot', async () => {
    const tree = renderer.create(<BookAuthorBar authorArray={authorNameArray} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('getAuthorComponents', () => {
  it('should return array with two rows each having Text component', async () => {
    const tree = renderer.create(<BookAuthorBar authorArray={authorNameArray} />);
    expect(tree.getInstance().getAuthorComponents(authorNameArray).length).toEqual(2);
  });
  it('should return empty array when passed author array os empty', async () => {
    const tree = renderer.create(<BookAuthorBar authorArray={authorNameArray} />);
    expect(tree.getInstance().getAuthorComponents([])).toEqual([
    ]);
  });
});
