import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C7C4FF'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#8c87d4',
    padding: 5,
    margin: 5
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',    
    padding: 5,
    margin: 5
  } ,
  title: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center'
  },
  content: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#AAA439',
    padding: 10,
    margin: 5
  }
});
