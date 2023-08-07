import { useState } from 'react';
import Calendar from 'react-calendar';
// import './App.css';

function CalendarS() {
 const [date, setDate] = useState(new Date());

 return (
 <div className='w-[350px] font-semibold text-gray-600 p-4 '>
 
   <div>
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
 </div>
  );
}

export default CalendarS;