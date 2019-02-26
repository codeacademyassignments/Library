import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BooksOnSearchKey from '../BooksOnSearchKey.component';
import testData from '../../../TestData/TestData';
import GetBooksOnSearchKey from '../../../Helper/GetBooksOnSearchKey';

jest.mock('../../../Helper/GetBooksOnSearchKey');

describe('BooksOnSearchKey', () => {
  it('should match old snapshot', async () => {
    GetBooksOnSearchKey.mockResolvedValue({ data: testData });
    const tree = renderer.create(<BooksOnSearchKey navigation={{ getParam: jest.fn() }} />);
    await tree.getInstance().componentDidMount();
    expect(tree).toMatchSnapshot();
  });
});

describe('componentDidMount', () => {
  const keyword = 'quilting';
  GetBooksOnSearchKey.mockResolvedValue({ data: testData });
  const getParam = jest.fn(() => keyword);

  it('should change the state and call mock functions with proper arguements', async () => {
    const wrapper = shallow(<BooksOnSearchKey navigation={{ getParam }} />);
    expect(wrapper.instance().state).toEqual({ searchKey: '', booksBasedOnSearchKey: [] });
    await wrapper.instance().componentDidMount();
    expect(GetBooksOnSearchKey).toHaveBeenCalledWith(keyword);
    expect(getParam).toBeCalledTimes(4);
    expect(wrapper.instance().state).toEqual(
      { searchKey: keyword, booksBasedOnSearchKey: testData.items },
    );
  });
});

describe('getBookCards', () => {
  GetBooksOnSearchKey.mockResolvedValue({ data: testData });
  it('should return array of BookCards', () => {
    const keyword = 'quilting';
    const wrapper = shallow(<BooksOnSearchKey navigation={{ getParam: jest.fn() }} />);
    wrapper.instance().setState({ searchKey: keyword, booksBasedOnSearchKey: testData.items });
    expect(wrapper.instance().state).toEqual({ booksBasedOnSearchKey: testData.items, searchKey: keyword });
    const bookCards = wrapper.instance().getBookCards();
    expect(bookCards.length).toEqual(testData.items.length);
  });
});
