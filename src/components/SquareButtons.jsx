import React from 'react'
import { Link } from 'react-router-dom'
function SquareButtons (props) {
  return (
    <>
<div className="main hover:scale-95 transition-all duration-400  ">
  <div className="up justify-center ">
    <Link to={props.button1}>
    <button className={`${props.class1 ? 'show' : 'hidden'} grid ${props.class1} place-content-center  transition-all duration-200 `}>
    <div
        width="20px"
        height="20px"
        className="icon1  justify-center flex"
        >
        {props.icon1}
      </div>
      <p className='icon1 font-semibold w-28' >
        {props.name1}
              </p>
      </button>
        </Link>
        <Link to={props.button2}>
    <button className={`${props.class2 ? 'show ' : 'hidden '} grid ${props.class2} place-content-center   transition-all duration-200 `}>
      <div
        width="30px"
        height="30px"
        className="icon2 justify-center grid"
      >
        {props.icon2}
              </div>
              <p className='icon2 font-semibold flex w-28' >
        {props.name2}
              </p>
    </button>
</Link>
  </div>
  <div className="down justify-center">
  <Link to={props.button3}>
    <button className={`${props.class3 ? 'show' : 'hidden'} grid ${props.class3} place-content-center   transition-all duration-200 `}>
    <div
        width="30px"
        height="30px"
        className="icon3 justify-center grid"
      >
        {props.icon3}
              </div>
              <p className='icon3 font-semibold w-28' >
        {props.name3}
              </p>    </button>
    </Link>
    <Link to={props.button4}>

    <button className={`${props.class4 ? 'show' : 'hidden'} grid ${props.class4} place-content-center   transition-all duration-200 `}>
    <div
        width="30px"
        height="30px"
        className="icon4 justify-center grid"
      >
        {props.icon4}
              </div>
              <p className='icon4 font-semibold w-28' >
        {props.name4}
              </p>    </button>
</Link>
  </div>
</div>

    </>
  )
}

export default SquareButtons
