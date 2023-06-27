import React from 'react';
import { Box, Button, IconButton, Paper,Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';



const DataBox = ({ data }) => {
    const { title = '', description = '', dueDate = '' } = data || {};

    const styles = {
        paper: {
          position: 'relative',
          width: 800,
          height: 130,
          marginBottom: '10px',
          padding: '16px',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        title: {
          fontWeight: 'bold',
          
        },
        description: {
          marginBottom: '8px',
          textAlign: 'center',
        },
        dueDate: {
          color: '#888',
        },
        Button: {
            margin:'3px',
            position: 'absolute',
            bottom: '8px',
            right: '8px',
          },
      };
  
    return (
        <Box 
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Paper elevation={4} sx={styles.paper}>
      <Typography variant="h5" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="body1" sx={styles.description}>
        {description}
      </Typography>
      <Typography variant="subtitle2" sx={styles.dueDate}>
        Due Date: {dueDate}
      </Typography>
      <IconButton sx={styles.Button} edge='end' color="primary" aria-label=" task completed ">
      <CheckCircle/>
    </IconButton>
    </Paper>
      </Box>
    );
  };

export default DataBox;