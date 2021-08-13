import React from 'react';

export function Social({item}) {
  return (
    <li className="sm-icon">
      <a target="_blank" href={item.link}>
        <i className={item.icon}></i>
      </a>
    </li>);
}
