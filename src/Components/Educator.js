import React from 'react'
import Teacher from './Teacher'
export default function Educator() {
    const educators = [
<Teacher pic={"https://cdn.pixabay.com/photo/2016/06/15/18/48/gender-1459661_1280.png"} name={"abhishek"} />,
<Teacher pic={"https://cdn.pixabay.com/photo/2016/06/15/18/48/gender-1459661_1280.png"} name={"neelam"} />
    ]
  return (
    <>
    <div className=''>
      {educators.map((val,idx)=>{
        return(
<div className=''>
    {val}
</div>

        )
      })}
      </div>
    </>
  )
}
