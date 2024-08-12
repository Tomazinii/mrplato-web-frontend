import * as React from 'react';
import DrawerClassroom from '../../component/admin/DrawerClassroom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Container, Divider, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Alert } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styles from './Activity.module.css';
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
import { ContextClassroom } from '../../context/ContextClassroom';
import { getAllProblemFunctions } from '../../utils/classroom/getAllProblemFunctions';
import { delete_activity, inputDeleteActivityProps, inputRegisterActivityByInsertProps, inputRegisterActivityBySelectProps, register_activity_by_insert_problem, register_activity_by_select_problem } from '../../api/Classroom.api';
import { Link } from 'react-router-dom';
import { getActivityFunctions, inputgetActivityFunctionsProps } from '../../utils/classroom/getActivitiesFunctions';

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

export default function Activity() {
  const [formData, setFormData] = React.useState({
    time: null,
    selectProblem: '',
    category: '',
    disponivel: true,
  });
  const [selectedProblemId, setSelectedProblemId] = React.useState("")
  const [dense, setDense] = React.useState(false);
  const [problemForm, setProblemForm] = React.useState(false);
  const [selectedDateTime, setSelectedDateTime]: any = React.useState(new Date());
  const [message, setMessage]: any = React.useState("")
  const [problemNameForm, setProblemNameForm]: any = React.useState("")
  const [file, setFile] = React.useState<any>();
  const [activityId, setActivityId] = React.useState<any>();
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = React.useState(false); // State para controlar a abertura da caixa de diálogo de confirmação
  const { stateClassroom, dispatchClassroom } = React.useContext(ContextClassroom) || {};

  React.useEffect(() => {
    getAllProblemFunctions(dispatchClassroom);
    const props: inputgetActivityFunctionsProps = {
      classroom_id: String(localStorage.getItem('classroom_id')),
      dispatch: dispatchClassroom,
  }
  getActivityFunctions(props)
  }, []);

  const handleChanges = (date: any) => {
    setSelectedDateTime(date);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];
    if (fileUploaded) {
      setFile(fileUploaded);
    }
  };

  const handleSubmits = (e: any) => {
    e.preventDefault();
    if (formData.category === "") {
      setMessage("Please select a category");
      return;
    }
    try {
      const formattedDateTime = selectedDateTime.toISOString();
      if (problemForm) {
        const input: inputRegisterActivityBySelectProps = {
          availability: formData.disponivel,
          category: formData.category,
          classroom_id: String(localStorage.getItem("classroom_id")),
          problem_id: selectedProblemId,
          time: formattedDateTime
        };
        register_activity_by_select_problem(input).then((result) => {
          if (result.success === true) {
            setMessage("Activity registered successfully!!");
            setFormData({
              ...formData,
              category: "",
              selectProblem: ""
            });
            setSelectedProblemId("");
            setSelectedDateTime("Select Time");
          }
        });
      } else {
        const input: inputRegisterActivityByInsertProps = {
          availability: formData.disponivel,
          category: formData.category,
          classroom_id: String(localStorage.getItem("classroom_id")),
          file: file,
          problem_list_name: problemNameForm,
          time: formattedDateTime
        };
        register_activity_by_insert_problem(input).then((result: any) => {
          
          if (result.success === true) {
            setMessage("Activity registered successfully!!");
            setFormData({
              ...formData,
              category: "",
              selectProblem: ""
            });
            setSelectedProblemId("");
            setSelectedDateTime("Select Time");
          }else {
            setMessage(result.data);

          }
        });
      }
      setMessage("");
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

  const handleDeleteClick = () => {
    setDeleteConfirmationOpen(true); // Abrir a caixa de diálogo de confirmação
  };

  const handleDeleteConfirm = (element: any) => {
    const input: inputDeleteActivityProps = {
      activity_id: activityId
    }

    delete_activity(input).then((result) => {
      if (result.success === true) {
        setMessage("Activity Deleted successfully!!");
      }
    });
    
    // Lógica para remover o item
    setDeleteConfirmationOpen(false); // Fechar a caixa de diálogo de confirmação
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationOpen(false); // Fechar a caixa de diálogo de confirmação
  };
  

  return (
    <DrawerClassroom link_active={"activity"}>
      <Container maxWidth="sm">
        <form onSubmit={(e) => handleSubmits(e)}>
          <h2>Register Task</h2>
          <FormControl fullWidth margin="normal">
            <Button onClick={() => { setProblemForm(!problemForm) }} variant="outlined">{problemForm ? " SELECT LIST OF PROBLEMS FILE" : "SELECT EXISTING LIST OF PROBLEMS"}</Button>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <label>Deadline</label>
            <Datetime inputProps={{ className: styles.custom }} value={selectedDateTime} onChange={handleChanges} />
          </FormControl>
          {problemForm ?
            <FormControl fullWidth margin="normal">
              <InputLabel>Select List of Problem</InputLabel>
              <Select
                name="selectProblem"
                value={formData.selectProblem}
                onChange={handleChange}
              >
                {stateClassroom && stateClassroom.problems && stateClassroom.problems.problems.map((element: any) => (
                  <MenuItem key={element.id} onClick={() => { setSelectedProblemId(element.id) }} value={element.list_name}>{element.list_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            :
            <>
              <FormControl fullWidth margin="normal">
                <TextField
                  id="problem"
                  label="Task name"
                  value={problemNameForm}
                  onChange={handleInputChangeProblemName}
                  variant="outlined"
                  size="medium"
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
                  <VisuallyHiddenInput onChange={handleFileChange} type="file" />
                  {file ? (
                    <p>
                      File selected: {file.name}
                    </p>
                  ) : "Upload file"}
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
              <MenuItem value="exercises">Exercises</MenuItem>
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
            Submit
          </Button>

      {message &&<Alert style={{marginTop:"20px"}} severity="info"> {message} </Alert> }
        </form>
      </Container>
      <Divider style={{ marginTop: "30px" }} />
      <Container maxWidth="md">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Tasks | {stateClassroom.activity_list && stateClassroom.activity_list.length}
          </Typography>
          {stateClassroom.activity_list && stateClassroom.activity_list.map((element: any) => (
            <List dense={dense}>
              <ListItem
                style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                className={element.availability ? `${styles.active}` : `${styles.deactive}`}
                secondaryAction={
                  <>
                    <Link to={`update/${element.id}`}>
                      <IconButton style={{ marginRight: "20px" }} edge="end" aria-label="update">
                        <Edit />
                      </IconButton>
                    </Link>
                    <IconButton onClick={()=>{
                      handleDeleteClick()

                      setActivityId(element.id)
                      }} edge="end" aria-label="delete">
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
                  primary={`${element.problem_name}`}
                  secondary={`expires in ${new Date(element.time).toLocaleString('pt-BR')} - ${element.category}`}
                />
              </ListItem>
            </List>))}
        </Grid>
      </Container>
      <Dialog open={deleteConfirmationOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </DrawerClassroom>
  );
}
