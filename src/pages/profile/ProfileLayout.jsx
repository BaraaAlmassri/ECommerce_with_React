import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
export default function ProfileLayout() {
  return (
        <Box>
          <Typography>My Profile</Typography>
                    
                    <Link to=''>Info</Link>
                    <Link to='orders'>Orders</Link>
        </Box>
  )
}
