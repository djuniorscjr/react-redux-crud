import React from 'react';
import PropTypes from 'prop-types';
import { 
	StyleSheet,
	View, 
	Text, 
	FlatList,
	Image,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { list, setItem, remove, edit } from '../../actions/game';
import ActionSheet from 'react-native-actionsheet';
import Icon from 'react-native-vector-icons/Ionicons';

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2
const options = [ 'Cancel', 'Edit', 'Delete'];
const title = 'Choose option';

class List extends React.PureComponent {
	
	static propTypes = {
		list: PropTypes.func,
		setItem: PropTypes.func,
		navigation: PropTypes.object,
		edit: PropTypes.func,
		remove: PropTypes.func,
		_id: PropTypes.string,
		loading: PropTypes.bool,
		data: PropTypes.array,
	};

	componentDidMount() {
		this.props.list();
	}

	showActionSheet = (_id) => {
		this.props.setItem(_id);
    this.ActionSheet.show();
  };

	handlePressActionSheet = (i) => {
		if (i === 1) {
			this.props.navigation.navigate('Add');
			this.props.edit(this.props._id);
		} else if(i === 2) {
			this.props.remove(this.props._id);
		}
	}

	renderFooter = () => {
		if (!this.props.loading) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

	renderSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  };

	renderItem = ({ item }) => (
		<View style={styles.item}>
			<View style={styles.panel}>
				<Image source={{uri: item.cover}} style={styles.image}/>
			</View>
			<View style={styles.title}>
				<Text>{item.title}</Text>
			</View>
			<View style={styles.btn}>
				<TouchableOpacity onPress={() => { this.showActionSheet(item._id)}}>
					<Icon name="ios-settings-outline" size={30}  />
				</TouchableOpacity>
			</View>
		</View>
	);

	render() {
		return (
			<View>
				<FlatList
					data={this.props.data}
					renderItem={this.renderItem}
					keyExtractor={item => item._id}
					ItemSeparatorComponent={this.renderSeparator}
					ListFooterComponent={this.renderFooter}
				/>
				<ActionSheet
          ref={o => this.ActionSheet = o}
          title={title}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePressActionSheet}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: { 
		flexDirection: 'row', 
		paddingVertical: 5, 
		paddingHorizontal: 5, 
		height: 70, 
	}, 
	panel: { 
		width: '20%', 
		justifyContent: 'center', 
		alignItems: 'center', 
	},
	image: { 
		borderRadius: 100, 
		height: 50, 
		width: 50, 
	}, 
	title: { 
		width: '65%', 
		justifyContent: 'center', 
		alignItems: 'flex-start', 
		paddingLeft: 10,
	},
	btn: { 
		width: '15%', 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	separator: {
		height: 1,
		width: "86%",
		backgroundColor: "#CED0CE",
		marginLeft: "14%"
	},
	footer: {
		paddingVertical: 20,
		borderTopWidth: 1,
		borderColor: "#CED0CE"
	}
});

const mapStateToProps = state => ({
	data: state.game.list,
	loading: state.game.loading,
	_id: state.game._id,
});

export default connect(mapStateToProps, { list, setItem, remove, edit })(List);
