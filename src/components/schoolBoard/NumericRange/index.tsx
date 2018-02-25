import * as React from 'react';

interface Props {
  start: number;
  end: number;
}

export default function NumericRange(props: Props) {
  return (
    <div>
      {props.start} - {props.end}
    </div>
  );
}