import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddCircle } from '@mui/icons-material';
import { CardContent, Grid, MenuItem, TextField, Autocomplete } from '@mui/material';
import {useForm} from 'react-hook-form';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CheckIcon from "@mui/icons-material/Check";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const names = [
    "Humaira Sims",
    "Santiago Solis", 
    "Kaden Fields",
    "Harris Glenn",
    "Kapil yadew"
  ];


    const { register, handleSubmit, formState: { errors },watch,clearErrors,setValue} = useForm();
    const onSubmit = data => console.log(data); 
    
  

  
    
   
    

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'startIcon={<AddCircle/>}>Add task</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" align='center'>
              Add a task
            </Typography>
            
                <CardContent sx={{p:2}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item p={1}>
                        <TextField  
                        type='text' 
                        name='title'  
                        label='Title' 
                        placeholder='add a title' 
                        variant='outlined'  
                        fullWidth
                        {...register("title",{required:"Title is required."})}
                        error={Boolean(errors.title)}
                        helperText={errors.title?.message}/> 
                    </Grid>
                    <Grid item p={1}>
                        <TextField 
                        type='text'
                        name='description' 
                        multiline rows={3} 
                        label='Description' 
                        placeholder='add a title' 
                        variant='outlined' 
                        fullWidth
                        {...register("description",{required: "Description is required."})}
                        error={Boolean(errors.description)}
                        helperText={errors.description?.message}
                        /> 
                    </Grid>
                    <Grid item p={1} >
                       
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker 
                        label="Due Date" 
                        sx={{alignSelf:'center'}} 
                        name='date'
                        disablePast
                        {...register('date',{ required: "date is required" })}
                        value={watch('date')}
                        onChange={(date) => {
                          setValue('date', date);   
                          clearErrors('date');  
                        }}
                        
                        slotProps={{
                          textField: {
                            helperText: errors.date?.message,
                            error:Boolean(errors.date),
                          },
                          
                        }}
                            
                          />
                        
                      </DemoContainer>
                    </LocalizationProvider>
                    </Grid>
                    <Grid item p={1}>
                    <Autocomplete
                        
                        multiple
                        options={names}
                        getOptionLabel={(option) => option}
                        disableCloseOnSelect
                        {...register('members')}
                        
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select Members"
                            placeholder="Select Members"
                            
                          />
                        )}
                        renderOption={(props, option, { selected }) => (
                          <MenuItem
                            {...props}
                            key={option}
                            value={option}
                            sx={{ justifyContent: "-moz-initial"}}
                          >
                            {option}
                            {selected ? <CheckIcon color="info" /> : null}
                          </MenuItem>
                        )}

                      />
                 
                    </Grid>
                    <Grid item p={1}>
                        <Button variant='contained' fullWidth type='submit'>Add</Button>
                        
                    </Grid><Grid item p={1}>
                        <Button type='reset' variant='outlined'fullWidth onClick={handleClose}>Cancel</Button>
                    </Grid>
                    </form>
                    
                </CardContent>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}