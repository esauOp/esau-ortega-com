import React from 'react';
import { Social } from './Social';

export function Footer({ items }) {
  return (
    <footer>
      <ul>
        {items.map((item) => (
          <Social key={item.id} item={item} />
        ))}
      </ul>
    </footer>
  );
}
