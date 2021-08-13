import React from 'react';

export function ItemLink({ item }) {
  return (
    <li className="nav-li">
      <a href={item.link} className="nav-link">
        {item.description}
      </a>
    </li>
  );
}
