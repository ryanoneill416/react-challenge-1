import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <div>
                    <p>Welcome to the site! Please complete the procedure outlined below:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete setting up your profile</li>
                        <li>Subscribe to our newsletter</li>
                    </ol>
                </div>
            ) : (
                <p>Please sign in</p>
            )
        }
    </div>
  )
}

export default UserMessage