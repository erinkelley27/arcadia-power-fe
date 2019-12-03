import React from 'react'

import './List.css'

// List component is set up to render a table.
// If there are no contact, "No contacts" will be displayed in the browser.
const List = ({ children = {} }) => (
  children.length > 0 ?
    <table className="List">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table> :
    <p className="NoData">No contacts</p>
)

export default List