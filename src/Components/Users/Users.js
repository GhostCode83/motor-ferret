import React from 'react'


function Users(props) {
  let user = props.users.map((user, idx) => {
    return (<section key={idx}>
      <h4>
        {user.username}
      </h4>
      <p>{user.profile_picture}</p>
      <p>
        Member Since:
        {user.start_date}
      </p>

      <p>
        Flagged: {user.flagged}</p>
    </section>
    )

  })
  return (
    <>
      <section>
        <h3>View Users:</h3>
        <p>Admins Only!</p>
      </section>
      { user}
    </>
  )
}
export default Users