import React from 'react';
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
import { save } from '../../actions/game';

class Add extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			cover: '',
			_id: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.game) {
			const { title, cover, _id } = nextProps.game;
			this.setState({ 
				title, cover, _id
			});
		}
	}

	save = () => {
		const { title, cover } = this.state;
		this.props.save({ title, cover})	
	}

	new = () => {
		this.setState({
			title: '',
			cover: '',
			_id: '',
		});
	}

	renderImage() {
		if (this.state.cover === '') {
			return (
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Cover')}>
					<Image 
						source={require('../../image/empty.png')} 
						style={styles.image}
					/>
				</TouchableOpacity>
			);
		}
		return (
			<Image 
				source={{uri: this.state.cover}} 
				style={styles.image}
			/>
		);
	}

	renderBtnNew() {
		if (this.state._id !== '') {
			return (
				<TouchableOpacity 
					onPress={()=> { this.new()}}
					style={styles.btnInverse}
				>
					<Text style={styles.btnTxtInverse}>New</Text>
				</TouchableOpacity>
			);
		} 

		return false;
	}

	styleBtnDisabled() {
		return this.state.title === '' ||
			this.state.cover === '' ?
			{ backgroundColor: '#DDD' }:
			{};
	}

	txtBtnDisabled() {
		return this.state.title === '' ||
			this.state.cover === '' ?
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
					onChangeText={(title) => this.setState({title})}
					value={this.state.title}
				/>
				<View style={styles.panel}>
					{ this.renderImage() }					
				</View>
				<TouchableOpacity 
					onPress={()=> { this.save()}}
					disabled={this.state.title == '' || this.state.cover == ''}
					style={[styles.btn, this.styleBtnDisabled()]}
				>
					<Text style={[styles.btnTxt, this.txtBtnDisabled()]}>Save</Text>
				</TouchableOpacity>
				{ this.renderBtnNew() }
			</View>
		);
	}
};

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
	game: state.game.game
});

export default connect(mapStateToProps, {})(Add);
