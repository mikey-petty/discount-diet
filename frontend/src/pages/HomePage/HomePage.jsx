import React from 'react'
import DietPlanForm from '../../components/Diet/Diet'
import Header from '../../components/Header/Header'
import DbConnect from '../../components/DbConnect/DbConnect'

function Home() {
  return (
    <>
      <Header />
      <DietPlanForm />
      <DbConnect />
    </>
  )
}

export default Home