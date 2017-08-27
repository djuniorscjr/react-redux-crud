import React from 'react';
import PropTypes from 'prop-types';
import { 
	StyleSheet, 
	View,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { sendImage } from '../../actions/game';
import Camera from 'react-native-camera';
import RNFS from 'react-native-fs';

class CaptureCover extends React.Component {

	static propTypes = {
		sendImage: PropTypes.func,
		navigation: PropTypes.object,
	}

	takePicture = () => {
		const options = {};
		this.camera.capture({metadata: options})
			.then((data) => {
				let image = data.path;

				RNFS.readFile(image, 'base64')
					.then( res => {
						this.props.sendImage(res);
						this.props.navigation.navigate('Add');
					});
			}); 
	}

	render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
				<View style={styles.btns}>
					<TouchableOpacity 
						onPress={()=> { this.props.navigation.goBack()}}
						style={styles.btn}
						>
						<Icon name="md-arrow-round-back" size={30} color="#FFF" />
					</TouchableOpacity>	
					<TouchableOpacity 
						onPress={()=> { this.takePicture()}}
						style={styles.btnInverse}
					>
						<Icon name="md-camera" size={30} color="#1ba853" />
					</TouchableOpacity>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 9,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  btns: {
		flex: 1,
		flexDirection: 'row'
  },
  btnInverse: { 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#fff', 
		width:'50%',
	},
	btn: { 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#1ba853', 
		width:'50%',
	},
});

export default connect(null, { sendImage })(CaptureCover);
