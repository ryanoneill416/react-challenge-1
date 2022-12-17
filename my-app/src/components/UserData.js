import React from 'react'

function UserData(props) {
  return (
    <div>
        {
            props.isLoaded ? (
                <h1>Data Loaded Succesfully</h1>
            ): (
                <h1>Loading...</h1>
            )
        }
    </div>
  )
}

export default UserData
