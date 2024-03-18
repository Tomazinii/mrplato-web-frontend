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
import styles from './Activity.module.css';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { ArrowBack, AssignmentOutlined, Edit } from '@mui/icons-material';
import { ContextClassroom } from '../../context/ContextClassroom';
import { getAllProblemFunctions } from '../../utils/classroom/getAllProblemFunctions';
import {inputRegisterActivityBySelectProps, inputUpdateActivityProps, register_activity_by_insert_problem, register_activity_by_select_problem, update_activity } from '../../api/Classroom.api';
import { Link, useParams } from 'react-router-dom';


export default function Activity() {
  const {idActivity} = useParams()
  const { stateClassroom, dispatchClassroom } = React.useContext(ContextClassroom) || {};
  const activity_info = stateClassroom.activity_list && stateClassroom.activity_list.find((element:any)=>element.id === idActivity)


  const selectedDateTimes = activity_info ? new Date(activity_info.time) : new Date()
  
  const initialFormData = activity_info ? {
    time: new Date(activity_info.time), // assuming activity_info.time is a valid date string
    selectProblem: '',
    category: activity_info.category,
    disponivel: activity_info.availability,
  } : {
    time: null,
    selectProblem: '',
    category: "",
    disponivel: true,
  };

  const [category, setCategory] = React.useState(initialFormData.category);
  const [formData, setFormData] = React.useState(initialFormData);

  const [selectedDateTime, setSelectedDateTime]: any = React.useState(selectedDateTimes);

  const [message, setMessage]: any = React.useState("");
  const [problemNameForm, setProblemNameForm]: any = React.useState("");


  React.useEffect(() => {
    getAllProblemFunctions(dispatchClassroom);
  }, []);

  const handleChanges = (date: any) => {
    setSelectedDateTime(date);
  };



  const handleSubmits = (e: any) => {
    e.preventDefault();
    if (category === "") {
      setMessage("Please select a category");
      return;
    }
    try {
      const formattedDateTime = selectedDateTime.toISOString();
      
        const input: inputUpdateActivityProps = {
          availability: formData.disponivel,
          category: formData.category,
          activity_id: String(idActivity),
          time: formattedDateTime
        };
        
        update_activity(input).then((result) => {
          if (result.success === true) {
            setMessage("Activity updated successfully!!");
          }
        });
     
    } catch (error: any) {
      setMessage(error.message);
    }
  };


  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleInputChangeProblemName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProblemNameForm(event.target.value);
  };

  return (
    <DrawerClassroom link_active={"activity"}>
      {activity_info  && 
      <Container maxWidth="sm">
        <form onSubmit={(e) => handleSubmits(e)}>
          <h2>Update Activity - {activity_info && activity_info.problem_name}</h2>
          <FormControl fullWidth margin="normal">
            <label>Change time</label>
            <Datetime inputProps={{ className: styles.custom }} value={selectedDateTime} onChange={handleChanges} />
          </FormControl>

         <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value= {category}

              onChange={(e: any)=>setCategory(e.target.value)}
            >
              <MenuItem value="exercises" >Exercises</MenuItem>
              <MenuItem value="challenges">Challenges</MenuItem>
              <MenuItem value="tournament" disabled>Disabled: Tournament</MenuItem>
              <MenuItem value="games" disabled>Disabled: Games</MenuItem>
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
            Update
          </Button>
          {<p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#333" }}>{message}</p>}
        </form>
        <Link to="#" onClick={() => window.history.back()} style={{ position: "absolute", top: 95, left: 300, display: "flex", alignItems: "center", textDecoration: "none", color: "#333", padding: "10px" }}>
  <IconButton>
    <ArrowBack />
  </IconButton>
  <span>Back</span>
</Link>
      </Container>
      }
    </DrawerClassroom>
  );
}
