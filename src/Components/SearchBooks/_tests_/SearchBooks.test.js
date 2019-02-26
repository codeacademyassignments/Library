import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import SearchBooks from '../SearchBooks.component';

describe('SearchBooks', () => {
  it('should match with old snap', () => {
    const tree = renderer.create(<SearchBooks navigation={{ navigate: jest.fn() }} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('SearchBooks: TextInput', () => {
  const mockNavigation = jest.fn();
  const searchKey = 'engineering';
  const wrapper = shallow(<SearchBooks navigation={{ navigate: mockNavigation }} />);

  it('should change the state when text input changes', () => {
    expect(wrapper.instance().state.searchKey).toEqual('');
    wrapper.find('TextInput').simulate('changeText', searchKey);
    expect(wrapper.instance().state.searchKey).toEqual(searchKey);
  });

  it('should call mockNavigation on end submitting', () => {
    wrapper.find('TextInput').simulate('endEditing');
    expect(mockNavigation).toHaveBeenCalledWith('BooksOnSearchKey', {
      searchKey,
    });
  });
});

describe('SearchBooks: Button', () => {
  const mockNavigation = jest.fn();
  const searchKey = '';
  const wrapper = shallow(<SearchBooks navigation={{ navigate: mockNavigation }} />);
  it('should call mockNavigation on pressing submit button', () => {
    wrapper.find('Button').simulate('press');
    expect(mockNavigation).toHaveBeenCalledWith('BooksOnSearchKey', {
      searchKey,
    });
  });
});

describe('SearchBooks: onSubmit', () => {
  const mockNavigation = jest.fn();
  const searchKey = 'future';
  const wrapper = shallow(<SearchBooks navigation={{ navigate: mockNavigation }} />);
  it('should call mockNavigation on call to onSubmit() with searchKey', () => {
    wrapper.find('TextInput').simulate('changeText', searchKey);
    wrapper.instance().onSubmit();
    expect(mockNavigation).toHaveBeenCalledWith('BooksOnSearchKey', {
      searchKey,
    });
  });
});
