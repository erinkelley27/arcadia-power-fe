import React from 'react'

const Item = ({ name = '', email = '', phone = '', onClick = () => {}}) => (
  <tr>
    <td>{name}</td>
    <td>
      <input name="email" type="text" value={email} />
    </td>
    <td>
      <input name="phone" type="text" value={phone} />
    </td>
    <td>
      <button onClick={onClick}>Delete</button>
    </td>
  </tr>
)

export default Item