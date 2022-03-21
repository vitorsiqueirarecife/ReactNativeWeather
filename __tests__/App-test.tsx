import 'react-native';
import  React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';
// import {render} from '@testing-library/react-native';

//@TODO Improve tests and fix bugs.

jest.mock('react-native-permissions', () => ({
  check: (_: boolean) => Promise.resolve(true),
}));

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('should render default components', () => {
//   const {getByText} = render(<App />);

//   getByText('Seja bem-vindo!');
//   getByText('Por favor, aguarde');
// });