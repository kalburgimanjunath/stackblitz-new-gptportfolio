import React, { useState, useEffect } from 'react';
export const useFetch = async (url) => {
  const [state, setState] = useState([]);
  return await fetch(url)
    .then((res) => res.json())
    .then((result) => setState(result));

  return state;
};
