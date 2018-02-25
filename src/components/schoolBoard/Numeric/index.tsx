import * as React from 'react';
import './style.css';

interface Props {
  number: Number;
}

export default function Numeric(props: Props) {
  return (
    <div className="school-board-numeric">
      {props.number}
    </div>
  );
}
