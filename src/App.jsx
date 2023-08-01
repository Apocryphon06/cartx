import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import ComingSoon from './ComingSoon'


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Fragment>
  )
}

export default App
