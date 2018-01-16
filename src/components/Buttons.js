import * as React from 'react';
import * as MaterialUI from 'material-ui';
import './Buttons.css';

var UploadLabel = MaterialUI.InputLabel;
var BtnUpload = MaterialUI.Button;

const BrowseBtnRender = (props) => {

	var handleImageFile = () => {
		var fileReader = new FileReader();
		props.imgPath(this.uploadBtn.files[0].path);
	}

	return (
		<UploadLabel title={props.title}>
			<BtnUpload raised color="primary" onClick={() => this.uploadBtn.click()}>Browse</BtnUpload>
			<input type="file" ref={(r) => {this.uploadBtn = r;}} 
				style={{display: 'none'}}
				accept="image/x-png,image/gif,image/jpeg"
				onChange={() => {
					handleImageFile();
				}}/>
		</UploadLabel>
	);
}

const ImageViewer = () => {

}

export class BrowseFilePannel extends React.Component {
	constructor(props) {
		super(props);
		var imgFile;
		this.state = {
			imgPath: ""
		}
	}

	componentWillMount() {
		console.log(this.state.imgPath);
	}

	render() {
		return (
			<div>
				<form method="POST">
					<BrowseBtnRender imgPath={(p) => {this.setState({imgPath : p});}}/>
					<br/>
					<br/>
					<BtnUpload raised color="primary" onClick={(e) => {
						console.log(this.imgFile.props.filePath);
					}}>Submit</BtnUpload>
				</form>
				<br/>
				{this.state.imgPath === "" ? null : <img src={require('./headphone3.jpg')} width="300" height="377" alt="Headphone"/>}
			</div>
		);
	}
} 