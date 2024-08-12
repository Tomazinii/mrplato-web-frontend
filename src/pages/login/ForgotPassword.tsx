import React, { useContext, useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
// @ts-ignore
import Loginlogo from '../../asset/logo.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { check_invite } from '../../api/Invite.api';
import NotFound from '../NotFound/NotFound';
import { register_student } from '../../api/Classroom.api';
import { registerStudentFunction } from '../../utils/classroom/registerStudent';
import { ContextGlobal } from '../../context/ContextGlobal';
import CircularProgress from '@mui/material/CircularProgress';
import { sendLinkPasswordEmail } from '../../utils/user/sendLinkEmail';
interface FormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate();
  const {stateGlobal, dispatchGlobal} = useContext(ContextGlobal) || {}

  


  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validar campos antes de enviar
    const newErrors: Partial<FormData> = {};
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Faça o que quiser com os dados do formulário, como enviar para um servidor
      const input: any = {
        email: formData.email,
        dispatch: dispatchGlobal
      }
      const result = sendLinkPasswordEmail(input)
      
    }
  };

  const isValidEmail = (email: string): boolean => {
    // Regex para validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  

  return (
    <Container style={{marginTop:"50px"}}  maxWidth="xs">
      {stateGlobal && stateGlobal.status_code !== 201 ? 
      <form onSubmit={handleSubmit}>
      <img src={Loginlogo}/>

        <Grid style={{marginTop:"50px"}}  container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5">Forgot password</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Type your e-mail</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            {stateGlobal && stateGlobal.loading ? <CircularProgress />:
            <Button type="submit" variant="contained" color="primary">
              Confirm
            </Button>
             }
          </Grid>
        </Grid>
      </form> : 
      <div style={{textAlign:"center"}}>
      <img src={Loginlogo}/>

      <h2 style={{marginTop:"50px"}}>We have sent a link to your email, please check it.</h2>
             
            </div>
      }
    </Container>
  );
};

export default ForgotPassword;
