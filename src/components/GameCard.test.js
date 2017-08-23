import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameCard from './GameCard';

test('GameCard component should render as expected', () => {
	const game = { _id: 0, cover: '', title: ''};
	const component = shallow(<GameCard game={game} deleteGame={() => false} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
