import React from 'react';
import { 
	StyleSheet, 
	View,
	Text
} from 'react-native';
import { connect } from 'react-redux';
import { sendImage } from '../../actions/game';
import Camera from 'react-native-camera';
import RNFS from 'react-native-fs';

class Cover extends React.Component {

	takePicture = () => {
		const options = {};
		this.camera.capture({metadata: options})
			.then((data) => {
				let image = data.path;

				RNFS.readFile( image, 'base64' )
					.then( res => this.props.sendImage(res));
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
					<Text style={styles.capture} onPress={() => this.takePicture()}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
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
  }
});

export default connect(null, { sendImage})(Cover);
