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
import { setNewPassword } from '../../utils/user/sendLinkEmail';
import { check_link_password } from '../../api/User.api';
interface FormData {
  password: string;
  confirmPassword: string;
}

const SetPassword: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate();
  const {stateGlobal, dispatchGlobal} = useContext(ContextGlobal) || {}

  


  React.useEffect(()=>{
    const input: any = {
      link_id: String(params.linkId)
    }
    const check = async () => {
      const result: any = await check_link_password(input);
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
    password: '',
    confirmPassword: '',
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Faça o que quiser com os dados do formulário, como enviar para um servidor
      const input: any = {
        password: formData.password,
        email: String(params.userEmail),
        link_id: String(params.linkId),
        dispatch: dispatchGlobal

      }
      const result = setNewPassword(input)
      
    }
  };


  

  return (
    <Container style={{marginTop:"50px"}}  maxWidth="xs">
      {stateGlobal && stateGlobal.status_code !== 201 ? 
      <form onSubmit={handleSubmit}>
      <img src={Loginlogo}/>

        <Grid style={{marginTop:"50px"}}  container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h6">Set your new password</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
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
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
      <div style={{ textAlign:"center"}}>
      <img src={Loginlogo}/>

      <h2>Password chagend successfully !</h2>
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

export default SetPassword;
