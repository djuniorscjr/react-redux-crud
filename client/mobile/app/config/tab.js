import { TabNavigator, StackNavigator } from 'react-navigation';
import List from '../screens/game/List';
import Add from '../screens/game/Add';

const Tab = TabNavigator({
	List: {
		screen: List,
		navigationOptions: {
			tabBarLabel: 'List',
		}
	},
	Add: {
		screen: Add,
		navigationOptions: {
			tabBarLabel: 'Add',
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: '#fff',
		style: {
			backgroundColor: '#1ba853',
		},
		labelStyle: {
			fontSize: 12,
			fontWeight: 'bold',
		},
		indicatorStyle: {
			backgroundColor: '#fff',
			paddingTop: 3,
		}
	}
});

export default StackNavigator({
	Home: { screen: Tab },
}, {
	navigationOptions: {
		headerStyle: {
			elevation: 0,
			shadowOpacity: 0,
			backgroundColor: '#1ba853',
		},
		title: 'Games',
		headerTintColor: '#fff',
	}
});
