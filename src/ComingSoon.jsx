// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     setTimeout(() => {
//       navigate('/')
//     }, 5000)

//   }, [])

  return (
    <div className="h-screen flex flex-col justify-center item-center">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-medium tracking-wide text-[#909090] text-center">
        Coming Soon
      </h1>

      {/* <p className="mt-2 text-base text-center">
        You will be redirected to home after 5 seconds
      </p> */}
    </div>
  )
}

export default ComingSoon
