import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import Sidebar from './components/sidebar'; 
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { green, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'; 
import './styles/main.css';



const rows = [
  {
    img: '/images/profile-1.jpg',
    user: 'John Smith',
    description: 'The Role of Social Media in College Decision-Making...',
    time: '04:00 AM',
    insights: 'Insights',
    approved: true,
    rejected: false,
  },
  {
    img: '/images/profile-2.jpg',
    user: 'John Smith',
    description: 'Impact of Social Media Marketing on College Enroll...',
    time: '04:00 AM',
    insights: 'Insights',
    approved: true,
    rejected: true,
  },
  {
    img: '/images/profile-3.jpg',
    user: 'John Smith',
    description: 'How Social Media Shapes College Aspirants and Choice...',
    time: '04:00 AM',
    insights: 'Insights',
    approved: true,
    rejected: true,
  },
  {
    img: '/images/profile-1.jpg',
    user: 'John Smith',
    description: 'Instagram and the Influence on College Image Perception...',
    time: '04:00 AM',
    insights: 'Insights',
    approved: true,
    rejected: false,
  },
  {
    img: '/images/profile-2.jpg',
    user: 'John Smith',
    description: 'Facebook vs. Twitter: Social Media Platforms\' Influence on Student Decision...',
    time: '04:00 AM', 
    insights: 'Insights',
    approved: true,
    rejected: false,
  },
];

const Main = () => {
  return (
    <Box className="main-container">
      {/* Left Sidebar */}
      <Box className="sidebar-container">
        <Sidebar /> 
      </Box>

      {/* Right Content Section */}
      <Box className="content-container">
        {/* Box with black background and heading */}
        <Box
          className="header-box"
          sx={{
            paddingTop: '14px',
            paddingLeft: '22px',
            paddingBottom: 0, 
            marginBottom:'-20px'
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className="stack-content"
          >
            <KeyboardBackspaceIcon className="arrow-icon" />
            <Typography
              variant="h7" 
              className="heading-text"
            >
              AI Overview
            </Typography>
          </Stack>
        </Box>

        <Box
          className="content-box"
          sx={{
            backgroundColor: '#000000', 
            paddingTop: 0
          }}
        >
          {/* Heading Row */}
          <Box
            className="header-box-0"
          >
            <Box sx={{ width: '8%', paddingLeft: '10px' }}>User</Box>
            <Box sx={{ width: '13%' }}>Name</Box>
            <Box sx={{ width: '50%' }}>Description</Box>
            <Box sx={{ width: '13%' }}>AI Performance</Box>
            <Box sx={{ width: '11%' }}>Approved</Box>
            <Box sx={{ width: '10%' }}>Rejected</Box>
            <Box sx={{ width: '5%' }}>Budget</Box>
          </Box>

          {/* Data Rows */}
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 15px', 
                  color: '#fff',
                  backgroundColor: 'rgba(80, 80, 80, 0.1)', 
                  borderRadius: '8px 8px 0 0',
                  
                  '&:hover': {
                    border: '1.5px solid #3f51b5',
                    background: 'linear-gradient(#1e322d, #2c4858)',
                  },
                }}
              >
                <Box sx={{ width: '8%', textAlign: 'center', marginLeft: '0px' }}>
                  <Avatar alt={row.img} src={row.img} sx={{ width: 32, height: 32 }} />
                </Box>

                <Box sx={{ width: '15%' ,fontSize: '0.8 rem'}}>{row.user}</Box>
                <Box className="description-box">{row.description}</Box>

                <Box
                  sx={{
                    width: '15%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: '0.8rem'
                  }}
                >
                  {index === 1 && (  // Check if it's the second row (index 1)
                    <Box
                      sx={{
                        width: '10px',  // Width of the small box
                        height: '13px', // Height of the small box
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff', 
                        borderRadius: '0px', 
                        marginLeft: '-12px', // Space between the box and the icon
                      }}
                    >
                      <HourglassEmptyIcon sx={{ fontSize: '1rem', color: '#000' }} />
                    </Box>
                  )}

                  {/* Access Time Icon */}
                  <IconButton
                    sx={{
                      color: '#ccc',
                      fontSize: '1rem', 
                      padding: '4px', 
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: '1.2rem' }} /> 
                  </IconButton>

                  {/* Time Typography */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.75rem', 
                      color: '#ccc',
                      marginLeft: '5px', // Space between the icon and the time
                    }}
                  >
                    {row.time}
                  </Typography>
                </Box>

                <Box sx={{ width: '15%' ,paddingLeft: '15px',fontSize: '0.8rem'}}>
                  <Typography variant="body1" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    {row.insights}
                  </Typography>
                </Box>
                <Box sx={{ width: '10%',paddingRight: '40px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: green[500],
                      color: '#fff',
                      borderRadius: '40px',
                      padding: '2px 10px',
                      fontSize: '0.75rem',
                      height: '25px',
                      width: '70px',
                    }}
                  >
                    Approved
                  </Box>
                </Box>
                <Box sx={{ width: '10%' ,paddingRight: '30px'}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: red[500],
                      color: '#fff',
                      borderRadius: '40px',
                      padding: '2px 10px',
                      fontSize: '0.75rem',
                      height: '25px',
                      width: '70px',
                    }}
                  >
                    Rejected
                  </Box>
                </Box>
                <Box sx={{ width: '5%', paddingLeft: '15px' }}>
                <Avatar
                    sx={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'transparent',
                      color: '#000',
                      padding: 0, 
                    }}
                  >
                    <img 
                      src="/images/budget.jpg"  
                      alt="Your Image"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover', 
                      }}
                    />
                  </Avatar>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#fff' }} />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
