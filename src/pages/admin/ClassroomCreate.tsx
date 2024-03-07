import * as React from 'react';

import DrawerClassroom from '../../component/admin/DrawerClassroom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { registerClassroom } from '../../utils/classroom/registerClassroomFunctions';
import { ContextUser } from '../../context/ContenxtUser';
import { ContextClassroom } from '../../context/ContextClassroom';
export default function ClassroomCreate() {

    const {stateUser, dispatchUser} = React.useContext(ContextUser) || {};
    const {stateClassroom , dispatchClassroom} = React.useContext(ContextClassroom) || {};

    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
      class_name: '',
    });
  
    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: any) => {

      e.preventDefault();
      const input = {
        class_name: formData.class_name,
        teacher_email: stateUser && stateUser.user_email,
        teacher_name: stateUser && stateUser.user_email,
        user_id: stateUser && stateUser.user_id,
        dispatch: dispatchClassroom,
      }
      registerClassroom(input)
      // Aqui você pode enviar os dados do formulário para onde precisar
      // Limpar o formulário após o envio
      setFormData({
        class_name: '',
      });
      navigate('/mrplato-admin/classrooms');
    };
  
    return (
      <DrawerClassroom>
        <h2>Register Classroom</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Class name"
            name="class_name"
            value={formData.class_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
           Register class
          </Button>
        </form>
      </DrawerClassroom>
    );
  }