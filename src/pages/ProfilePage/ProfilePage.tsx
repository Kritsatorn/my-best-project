import * as React from 'react';
import { ProfilePageState } from './ProfilePageType';
import {UnfinishedBillBox} from '../../components/UnfinishedBillBox/UnfinishedBillBox';
import './ProfilePage.css';

interface MyWindow extends Window {
  liff?: {
    init: (data: any) => void;
    getProfile: () => {
      displayName: string,
      pictureUrl: string,
      statusMessage: string
    };
    closeWindow: () => void;
    sendMessages: (data: any) => Promise<any>;
  }
}

export default class ProfilePage
    extends React.Component<object, ProfilePageState> {
			myWindow: MyWindow = window;
			liff = this.myWindow.liff;

			constructor(props: object){
				super(props);

				this.state = {
					count : 0,
					text : '',
					displayName : '',
					userId : '',
					pictureUrl : '',
					statusMessage : ''
				};

				// this.initialize = this.initialize.bind(this);
			}
			// componentDidMount() {
			// 	window.addEventListener('load', this.initialize);
			// }

			// initialize() {
			// 	this.liff!.init(async (data) => {
			// 		let profile = await this.liff!.getProfile();
			// 		this.setState({
			// 			displayName : profile.displayName,
			// 			userId : profile.userId,
			// 			pictureUrl : profile.pictureUrl,
			// 			statusMessage : profile.statusMessage
			// 		});
			// 	}); 
			// }

			render() {
				return (
					<div className="Profile-page">
						<div className="Profile-page_container">
							<div className="Profile-card_container">
								{/* <p>
									Display Name : {this.state.displayName} <br/>
									User ID : {this.state.userId} <br/>
									Status Msg : {this.state.statusMessage}
								</p> */}
								<div className="title">
									รายการบิลที่มี
								</div>
								<UnfinishedBillBox
								text = "กินข้าวร้านครัวแกงเผ็ด" 
								text2 = "By Pammu"
								text3 = "15 April 2018"
								status = {true}  
								/>
							</div>							
						</div>

					</div>
    			);
			}
		}