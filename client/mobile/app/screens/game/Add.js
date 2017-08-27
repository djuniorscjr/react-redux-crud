import React from 'react';
import PropTypes from 'prop-types';
import { 
	StyleSheet,
	View, 
	Text, 
	TextInput,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { save, newGame, setTitle } from '../../actions/game';

class Add extends React.Component {

	static propTypes = {
		save: PropTypes.func,
		navigation: PropTypes.object,
		loading: PropTypes.bool,
		image: PropTypes.string,
		newGame: PropTypes.func,
		setTitle: PropTypes.func,
		title: PropTypes.string,
		cover: PropTypes.string,
		_id: PropTypes.string,
	};

	save = () => {
		const { _id, title, cover } = this.props;
		this.props.save({ _id, title, cover });
	}

	renderImage() {
		if (this.props.cover === '') {
			return (
				<TouchableOpacity onPress={() => this.props.navigation.navigate('CaptureCover')}>
					<Image 
						source={require('../../image/empty.png')} 
						style={styles.image}
					/>
				</TouchableOpacity>
			);
		}
		const url = this.props.cover.indexOf('data:image') > 0 ? this.props.cover : 'data:image/png;base64,' + this.props.cover;
		return (
			<TouchableOpacity onPress={() => this.props.navigation.navigate('CaptureCover')}>
				<Image 
					source={{ uri: url }} 
					style={styles.image}
				/>
			</TouchableOpacity>
		);
	}

	renderBtnNew() {
		if (this.props._id !== '') {
			return (
				<TouchableOpacity 
					onPress={()=> { this.props.newGame()}}
					style={styles.btnInverse}
				>
					<Text style={styles.btnTxtInverse}>New</Text>
				</TouchableOpacity>
			);
		} 

		return false;
	}

	styleBtnDisabled() {
		return this.props.title === '' ||
			this.props.cover === '' ?
			{ backgroundColor: '#DDD' }:
			{};
	}

	txtBtnDisabled() {
		return this.props.title === '' ||
			this.props.cover === '' ?
			{ color: 'rgba(12, 11, 11, 0.27)'} :
			{};
	}

	render() {
		if (this.props.loading) {
			return (
				<ActivityIndicator animating size="large" />
			);	
		}
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="Title"
					underlineColorAndroid="transparent"
					placeholderTextColor="#1ba853"
					style={styles.input}
					onChangeText={(title) => this.props.setTitle(title)}
					value={this.props.title}
				/>
				<View style={styles.panel}>
					{ this.renderImage() }					
				</View>
				<TouchableOpacity 
					onPress={()=> { this.save()}}
					disabled={this.props.title === '' || this.props.cover === '' }
					style={[styles.btn, this.styleBtnDisabled()]}
				>
					<Text style={[styles.btnTxt, this.txtBtnDisabled()]}>Save</Text>
				</TouchableOpacity>
				{ this.renderBtnNew() }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 30,
	},
	input: {
		height: 40, 
		paddingVertical: 0, 
		backgroundColor: 'white', 
		elevation: 5, 
		fontWeight: 'bold'
	},
	panel: { 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	image: { 
		borderRadius: 100, 
		height: 100, 
		width: 100, 
		margin: 25
	},
	btnInverse: { 
		justifyContent: 'center', 
		marginTop: 25, 
		alignItems: 'center', 
		backgroundColor: '#fff', 
		height: 40, 
		elevation: 5
	},
	btn: { 
		justifyContent: 'center', 
		marginTop: 25, 
		alignItems: 'center', 
		backgroundColor: '#1ba853', 
		height: 40, 
		elevation: 5
	},
	btnTxt: { 
		color: 'white', 
		fontWeight: 'bold'
	},
	btnTxtInverse: { 
		color: '#1ba853', 
		fontWeight: 'bold'
	},
});

const mapStateToProps = state => ({
	loading: state.game.loading,
	_id: state.game._id,
	title: state.game.title,
	cover: state.game.cover,
});

export default connect(mapStateToProps, { save, newGame, setTitle })(Add);
