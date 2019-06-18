import * as React from 'react';
import { UnfinishedBillBoxProps } from './UnfinishedBillBoxType';
import './UnfinishedBillBox.css';

export class UnfinishedBillBox
	extends React.Component<UnfinishedBillBoxProps> {

		static angry = require('../../assets/Angry_Birds_Fat.png')
		render() {
			const { text , text2 , text3  } = this.props; 
			return (
				
					<div className="box">
						<img className="box_image" 
							src={UnfinishedBillBox.angry} 
							alt=""
						/>
						<div className="box_info">
							<div className="bill-name">{text}</div>
							<p className="bill-detail">{text2}<br/>{text3}</p>
						</div>
					</div>
				
				
			)
		}
	}