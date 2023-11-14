import { useState } from 'react';
import Calendar from 'react-calendar';



export default function MyCalendar (props) {
  let ValuePiece = Date | null;
  const [value, onChange] = useState(ValuePiece);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}