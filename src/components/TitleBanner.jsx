import { forwardRef } from 'react';
import '../App.css'

// eslint-disable-next-line react/display-name
const TitleHeader = forwardRef(
  (
  {
    Title
  },
  ref

  ) => {

  return (
    
    <>
      <div className='ImageHeader' width='100%'>
        <h1>{Title}</h1>
      </div>

    </>
  )
  }
);

export default TitleHeader
