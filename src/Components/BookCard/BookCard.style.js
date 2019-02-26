import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
    maxHeight: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  authorNames: {
    height: 15,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    marginTop: 10,
  },
  bookCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    height: 200,
  },
  bookDetails: {
    flex: 1,
    height: 200,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    overflow: 'hidden',
  },
});
