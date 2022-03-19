import 'react-native';
import  React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';
// import {fireEvent, render} from '@testing-library/react-native';

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

// it('should add one more on array when press count button', () => {
//   const {getByTestId, getByText} = render(<App />);

//   fireEvent.press(getByTestId('countButton'));
//   fireEvent.press(getByTestId('countButton'));

//   getByText('(0)');
//   getByText('(1)');
//   getByText('(2)');
// });
