import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of icecream - {numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(value))}>Restock icecream</button>
    </div>
  )
}
