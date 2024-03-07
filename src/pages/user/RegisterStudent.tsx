import React, { useContext, useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
// @ts-ignore
import Loginlogo from '../../asset/Login.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { check_invite } from '../../api/Invite.api';
import NotFound from '../NotFound/NotFound';
import { register_student } from '../../api/Classroom.api';
import { registerStudentFunction } from '../../utils/classroom/registerStudent';
import { ContextGlobal } from '../../context/ContextGlobal';
import CircularProgress from '@mui/material/CircularProgress';
interface FormData {
  matricula: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const RegisterStudent: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate();
  const {stateGlobal, dispatchGlobal} = useContext(ContextGlobal) || {}

  


  React.useEffect(()=>{
    const input: any = {
      invite_id: String(params.idInvite)
    }
    const check = async () => {
      const result: any = await check_invite(input);
      if (result.success === false){
        navigate("/expired")
      }else{
        if(result.data.status_code !== 200){
        navigate("/expired")
        }
      }
    };
  
    check();


    

  },[])

  const [formData, setFormData] = useState<FormData>({
    matricula: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
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
    if (!formData.matricula) {
      newErrors.matricula = 'Matrícula é obrigatória';
    }
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Senha deve ter pelo menos 8 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha';
    }
    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Faça o que quiser com os dados do formulário, como enviar para um servidor
      const input: any = {
        enrollment: formData.matricula,
        username: formData.name,
        email: formData.email,
        password: formData.password,
        classroom_id:params.idClassroom,
        invite_id: String(params.idInvite),
        dispatch: dispatchGlobal

      }
      const result = registerStudentFunction(input)
      
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
            <Typography variant="h6">Register</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Matrícula"
              name="matricula"
              value={formData.matricula}
              onChange={handleChange}
              error={!!errors.matricula}
              helperText={errors.matricula}
            />
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
            <TextField
              fullWidth
              label="Senha"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            {stateGlobal && stateGlobal.loading ? <CircularProgress />:
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
             }
          </Grid>
        </Grid>
      </form> : 
      <div style={{display:"grid", textAlign:"center"}}>
      <h2>Successfully registered !</h2>
             <Link to="/login">
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            </Link>
            </div>
      }
    </Container>
  );
};

export default RegisterStudent;
