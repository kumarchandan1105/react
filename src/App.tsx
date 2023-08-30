import React from 'react';
import './style.css';

function Chandan({ name }) {
  return <h2>Hi dear {name} </h2>;
}

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <>
      <Chandan name="Chandan" />
      <MyButton title="New Button" />
    </>
  );
}
