import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import SectionsNavigator from './SectionsNavigator'

const Main = () => {
  return (
    <Box component={"main"} sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"30px"}}>
        <Header/>
        <SectionsNavigator/>
    </Box>
  )
}

export default Main