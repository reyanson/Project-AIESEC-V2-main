import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Sidebar from './global/Sidebar'
import Topbar from './global/Topbar'
import DataBox from './components/Databox';

export default function Viewtask() {

    const [dataset, setDataset] = useState([]);

    useEffect(() => {
      // Simulating initial data fetch or any other data loading logic
      const initialData = [
        {
          title: 'Task 1',
          description: 'Description for Task 1',
          dueDate: '2023-06-30',
        },
        {
          title: 'Task 2',
          description: 'Description for Task 2',
          dueDate: '2023-07-15',
        },
        {
          title: 'Task 3',
          description: 'Description for Task 3',
          dueDate: '2023-08-10',
        },
        // {
        //     title: 'Task 4',
        //     description: 'Description for Task 4',
        //     dueDate: '2023-09-12',
        //   },
      ];
      setDataset(initialData);
    }, []);
  
    const addData = (newData) => {
        setDataset([...dataset, newData]);
      };
  return (
    <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
            <h1>My Tasklist</h1> 
            {dataset.map((data, index) => (
                <DataBox key={index} data={data} />
            ))}
        </Box>
        </Box>  
      
    </div>
  )
}
