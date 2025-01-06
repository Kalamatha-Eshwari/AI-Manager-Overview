'use client';
import { Box, Typography, List, ListItemText, Button, useTheme, useMediaQuery, Avatar } from '@mui/material';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import { alpha } from '@mui/material/styles';
import AndroidIcon from '@mui/icons-material/Android';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PaymentIcon from '@mui/icons-material/Payment';



const menuItems = [
  {
    icon: (
      <img
        src="/images/robot.svg"
        alt="Settings"
        style={{ height: '20px', width: '20px', marginRight: '3px' }}
        className="setting-icon"
      />
    ), 
    text: 'AI Overview',
    href: '/ai-overview',
  },
  {
    icon: (
      <img
        src="/images/setting.svg"
        alt="Settings"
        style={{ height: '20px', width: '20px', marginRight: '3px' }}
        className="setting-icon"
      />
    ),
   
    text: 'Manage',
    href: '/manage',
  },
  {
    icon: (
      <img
        src="/images/wallet.svg"
        alt="Settings"
        style={{ height: '20px', width: '20px', marginRight: '3px' }}
        className="setting-icon"
      />
    ),
   
    text: 'Account & Payments',
    href: '/account-payments',
  },
];


const Sidebar = () => {
  
  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo Section */}
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
        <Typography variant="h5" fontWeight="medium" sx={{ textAlign: 'center', color: 'white' }}>
          Logo
        </Typography>
      </Box>


      {/* Menu Items */}
<List sx={{ flexGrow: 1 }}>
  {menuItems.map((item) => {
    
    return (
      <Link
        key={item.href}
        href={item.href}
        style={{ textDecoration: 'none', color: 'inherit' }}
       
        legacyBehavior
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px', // Adjust padding for height
            borderRadius: '10px', // Round the corners
            width: '85%', // Maintain consistent width
            position: 'relative', // Positioning for the vertical line
            transition: 'all 0.3s', // Smooth transition for hover effects
            height: '40px', // Decreased height for the rectangle box
            border: '1px solid transparent', // Keeps box without a border initially
            marginBottom: '15px', // Adds vertical spacing between items
            marginLeft:'20px',

            '&:hover': {
              background: 'linear-gradient(to right, #0f1517, #2b3a55)',
              border: '1px solid #3f51b5', // Hover border color (Blue)
              marginLeft:'20px',
              

              '& .MuiTypography-root': {
                opacity: 1,
                color: 'rgba(255, 255, 255, 0.8)',
              },
              
              '&:after': {
                content: '""',
                position: 'absolute',
                right: '10px', // Gap between the vertical line and box
                top: '50%',
                transform: 'translateY(-50%)',
                width: '2px',
                height: '50%', // Height equal to the text height
                backgroundColor: '#E0F7FF', // Vertical line color
                opacity: 0.8, // Slight transparency for shiny effect
                boxShadow: '0px 0px 5px 2px  #3f51b5', // Shiny vertical line effect
              },
            '& svg': {
              color: 'rgba(255, 255, 255, 0.8)', // Ensures the icon changes color on hover
            },
            '& .setting-icon': {
              filter: 'brightness(1.2)', // On hover, change brightness for the image
            },
            },

            
          }}
        >
          
          <Box sx={{ marginRight: 0 }}>
            {item.icon}
          </Box>
          <ListItemText
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                fontWeight: 'medium',
                color: (theme) => alpha('#808080', 0.9)
              },
            }}
          />
        </Box>
      </Link>
    );
  })}
</List>

     
    {/* Logout Button (at the bottom) */}
<Box
  sx={{
    p: 2,
    borderBottom: (theme) => `0.5px solid ${alpha('#808080', 0.6)}`, // Thin line below the Logout button
    width: '70%', // Adjust this to control the length of the line
    maxWidth: 'none', // Removes the maxWidth constraint
    margin: '0 auto', // Centers the box horizontally
    display: 'flex',
    justifyContent: 'flex-start', // Aligns content to the start
  }}
>
  <Button
    sx={{
      color: 'white',
      textTransform: 'none',
      width: '100%', // Ensures the button spans the entire width of the box
      justifyContent: 'flex-start', // Aligns the icon and text to the start
      marginLeft: '-25px', 
    }}
  >
    <LogoutIcon sx={{ marginRight: '8px' }} /> {/* Adds space between the icon and text */}
    Logout
  </Button>
</Box>

{/* Profile Section (Below Logout) */}
<Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid grey',
      borderRadius: '4px',
      padding: '8px',
      width: 'auto',
      maxWidth: '250px',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginLeft: '-20px',
      backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1), // Adds background color
      position: 'relative', // Allows for positioning the green dot
    }}
  >
    <Box sx={{ position: 'relative' }}>
      <Avatar src="/images/profile.jpg" sx={{ width: 40, height: 40 }} />
      
      {/* Green Status Dot */}
      <Box
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#81C784', // Green color for the dot
          borderRadius: '50%',
          position: 'absolute',
          bottom: '0', // Adjust positioning of the dot to be at the bottom-right of the image
          right: '0', // Adjust positioning of the dot
         
        }}
      />
    </Box>
    
    {/* Profile Text */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        marginLeft: 0,
        paddingLeft: 0.5,
      }}
    >
      <Typography variant="body1" fontWeight="medium" sx={{ color: 'white' }}>
        John Smith
      </Typography>
      <Typography variant="body2" sx={{ color: 'gray' }}>
        johnsmith@gmail.com
      </Typography>
    </Box>
  </Box>
</Box>

</Box>
  );

  return (
    <Box
      sx={{
        width: 270, // Sidebar width 
        backgroundColor: '#111111',
        color: 'white',
        height: '100vh',
        borderRight: (theme) => `0.5px solid ${alpha('#808080', 0.4)}`,  // Light gray with transparency

      }}
    >
      {drawerContent}
    </Box>
  );
};

export default Sidebar;