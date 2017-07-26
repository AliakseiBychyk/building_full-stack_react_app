import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const AuthButton = (props) => {
  console.log(props.authenticated) // to remove later on
  if (props.authenticated) {
    return (
      <RaisedButton
        label='Logout'
        onTouchTap={props.auth.logout}
        fullWidth={true}
        secondary
      />
    )
  } else {
    return (
      <RaisedButton
        label={'Login / Signup'}
        onTouchTap={props.auth.showLock}
        fullWidth={true}
        primary
      />
    )
  }
}


export default AuthButton