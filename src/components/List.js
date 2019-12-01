import React from 'react'

const List = ({ children = {} }) => (
  children.length > 0 ?
    <table className="Table">
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