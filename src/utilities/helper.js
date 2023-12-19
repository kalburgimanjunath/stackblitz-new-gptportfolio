import React from 'react';
export function isEmpty(items) {
  if (items && items.length < 0) {
    return <div>Loading...</div>;
  } else {
    return items;
  }
}
