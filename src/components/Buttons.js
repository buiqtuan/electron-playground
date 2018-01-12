import * as React from 'react';
import * as MaterialUI from 'material-ui';
import './Buttons.css';

var UploadLabel = MaterialUI.InputLabel;
var BtnUpload = MaterialUI.Button;

const BrowseBtnRender = () => {
	return (
		<UploadLabel>
			<BtnUpload raised color="primary" onClick={() => this.uploadBtn.click()}>Upload</BtnUpload>
			<input type="file" ref={(r) => {this.uploadBtn = r;}} style={{display: 'none'}}/>
		</UploadLabel>
	);
}

export class BrowseFilePannel extends React.Component {

	render() {
		return (
			<div>
				<BrowseBtnRender/>
			</div>
		);
	}
} 