import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GamesPage from './GamesPage';
import store from '../config/store';
import { Provider } from 'react-redux';

test('GamesPage component should render as expected', () => {
	const component = shallow(
		<Provider store={store}>
			<GamesPage />
		</Provider>
	);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
