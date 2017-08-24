import React from 'react';
import { View, Text, } from 'react-native';
import { connect } from 'react-redux';

class Add extends React.Component {
	render() {
		return (
			<View>
				<Text>Add</Text>
			</View>
		);
	}
};

export default connect(null, {})(Add);
