import React from 'react';
import { UserProfileImage, UserName, UserRole, UserGithubName, EditBioButton, OtherDetails } from './styles';
import { fromJS } from 'immutable';

const UserDetails = (props) => (
  <div>
	<UserProfileImage 
	  shape="square" 
	  size={64} 
	  icon="user"
	  src={props.userbio.avatar_url}
	/>
	<UserName>
	  {props.userbio.name}
	</UserName>
	<UserGithubName>
	  {props.userbio.login}
	</UserGithubName>
	<UserRole>
	  {props.userbio.bio}
	</UserRole>
	<EditBioButton />
	<OtherDetails />
  </div>
)

export default UserDetails;
