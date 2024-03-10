import * as React from 'react';

import DrawerClassroom from '../../component/admin/DrawerClassroom';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Container, Divider, TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


import styles from './Activity.module.css'









import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { AssignmentOutlined, Edit } from '@mui/icons-material';


import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



const activitiesTest = [
  {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"exercises", "available":true,
  },
  {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"challenges", "available":true,
  },
  {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"challenges", "available":true,
  },
  {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"tournament", "available":false,
  },
  {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"exercises", "available":false,
  }, {
    "problem_name":"Lista de inferencia", "time":"07/03/2024", "category":"exercises", "available":false,
  }, 

]


export default function Activity() {
  const [formData, setFormData] = React.useState({
    time: null,
    selectProblem: '',
    category: '',
    disponivel: false,
  });

  const [selectedDateTime, setSelectedDateTime] = React.useState(new Date());
  const [atividades, setAtividades] = React.useState([]);
  const handleChanges = (date:any) => {
    setSelectedDateTime(date);
  };

  const handleSubmits = (e: any) => {
    e.preventDefault();

    // Format selectedDateTime to match the format expected by your Python API
    const formattedDateTime = selectedDateTime.toISOString();

    // Send formattedDateTime to your Python API
    console.log('Formatted DateTime:', formattedDateTime);
    // You can now send this formattedDateTime to your Python API
  };

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDateTimeChange = (value: any) => {
    setFormData({
      ...formData,
      time: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); // Here you can send the data wherever you need
  };





  
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [problemForm, setProblemForm] = React.useState(false);



  return (
    <DrawerClassroom link_active={"activity"}>

    <Container maxWidth="sm">
      
      <form onSubmit={(e)=>handleSubmits(e)}>
        <h2>Register Activiter</h2>
      <FormControl fullWidth margin="normal">
        <label>Time</label>
        <Datetime inputProps={{className: styles.custom}} value={selectedDateTime} onChange={handleChanges} />
        </FormControl>
      <FormControl fullWidth margin="normal">
      <Button onClick={()=>{setProblemForm(!problemForm)}} variant="outlined">{problemForm ? "Insert Problem":"Select Problem"}</Button>
      </FormControl>

      {problemForm ? 
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Problem</InputLabel>
          <Select
            name="selectProblem"
            value={formData.selectProblem}
            onChange={handleChange}
          >
            <MenuItem value="Problem 1">Problem 1</MenuItem>
            <MenuItem value="Problem 2">Problem 2</MenuItem>
            <MenuItem value="Problem 3">Problem 3</MenuItem>
          </Select>
        </FormControl>

        : 
        <>
        <FormControl fullWidth margin="normal">
         <TextField
            id="problem"
            label="Problem name"
            value={""}
            onChange={()=>{}}
            variant="outlined"
            size="small"
          />
          </FormControl>  

                  <FormControl fullWidth margin="normal">
                  <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
          </Button>
          
          </FormControl>  
          </>
        }
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <MenuItem value="Exercises">Exercises</MenuItem>
            <MenuItem value="Challenges">Challenges</MenuItem>
            <MenuItem value="Tournament" disabled>Disabled: Tournament</MenuItem>
            <MenuItem value="Games" disabled>Disabled: Games</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="disponivel"
              checked={formData.disponivel}
              onChange={handleChange}
            />
          }
          label="Available"

        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Submit
        </Button>
      </form>
    </Container>
    <Divider style={{marginTop:"30px"}}/>
    <Container maxWidth="md">
    <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Activities | {activitiesTest.length}
          </Typography>
            {activitiesTest.map((element)=>(
            <List dense={dense}>
                <ListItem
                style={{borderRadius:"10px", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}
                  className={element.available ? `${styles.active}` : `${styles.deactive}`}
                  secondaryAction={
                    <>

                    <IconButton style={{marginRight:"20px"}} edge="end" aria-label="update">
                      <Edit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>

                    </>
                    
                  }
                  
                >
                  
                  <ListItemAvatar>
                    <Avatar>
                      <AssignmentOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={element.problem_name}
                    secondary={`${element.time} - ${element.category}`}
                  />
                </ListItem>
            </List>))}
  
        </Grid>
    </Container>
    </DrawerClassroom>
   
  );
}