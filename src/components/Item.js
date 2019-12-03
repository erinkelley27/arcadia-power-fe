import React from 'react'

import './Item.css'

const Item = ({ name = '', email = '', phone = '', onClick = () => {}, onChange = () => {} }) => (
  <tr>
    <td>{name}</td>
    <td>
      <input className="item-input" onChange={onChange} name="email" type="text" value={email} />
    </td>
    <td>
      <input className="item-input" onChange={onChange} name="phone" type="text" value={phone} />
    </td>
    <td>
      <button onClick={onClick}>Delete</button>
    </td>
  </tr>
)

export default Item