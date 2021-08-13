import React from 'react';
import { ItemLink } from './ItemLink';

export function Header({ items }) {
  return (
    <header>
      <nav>
        <ul>
          {items.map((item) => (
            <ItemLink key={item.id} item={item}></ItemLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}
