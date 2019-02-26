import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchBooks from './src/Components/SearchBooks/SearchBooks.component';
import BooksOnSearchKey from './src/Components/BooksOnSearchKey/BooksOnSearchKey.component';

const MainNavigator = createStackNavigator({
  Home: {
    screen: SearchBooks,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BooksOnSearchKey: {
    screen: BooksOnSearchKey,
  },
},
{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;
