import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'

const Main = () => {
  return (
    <Box component={"main"} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Header/>
    </Box>
  )
}

export default Main