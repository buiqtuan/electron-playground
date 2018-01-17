import * as React from 'react';
import * as MaterialUI from 'material-ui';
import './Buttons.css';

var UploadLabel = MaterialUI.InputLabel;
var BtnUpload = MaterialUI.Button;

const BrowseBtnRender = (props) => {

	var handleImageFile = () => {
		var fileReader = new FileReader();
		console.log(this.uploadBtn.files[0]);
		props.imgPath(this.uploadBtn.files[0] === undefined ? "" : this.uploadBtn.files[0].name);
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
		};
	}

	componentDidMount() {
		console.log(this.state.imgPath);
	}

	setStateImgPath(p) {
		this.setState({
			imgPath : p
		});
	}

	render() {
		var _img;
		if (this.state.imgPath == "" || this.state.imgPath == undefined) {
			_img = null;
		} else {
			_img = <img src={require(`./${this.state.imgPath}`)} width="300" height="377" alt="Headphone"/>;
		}

		return (
			<div>
				<form method="POST">
					<BrowseBtnRender imgPath={(p) => this.setStateImgPath(p)}/>
					<br/>
					<br/>
					<BtnUpload raised color="primary" onClick={(e) => {
						console.log(this.state.imgPath);
					}}>Submit</BtnUpload>
				</form>
				<br/>
				{_img}
			</div>
		);
	}
} 