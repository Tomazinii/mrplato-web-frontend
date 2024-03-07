import * as React from 'react';

import DrawerClassroom from '../../component/admin/DrawerClassroom';
import styles from './Invite.module.css'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export default function Invite() {

  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    // Expressão regular para validar o formato do email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleAddInput = () => {
    const newEmails = inputValue
      .split(',')
      .map((email) => email.trim())
      .filter((email) => {
        if (!validateEmail(email)) {
          setError(`O email "${email}" não é válido.`);
          return false;
        }
        return true;
      });

    if (newEmails.length === 0) {
      setError('Please enter at least one valid email address.');
      return;
    }

    setEmails([...emails, ...newEmails]);
    setInputValue('');
    setError(null);
  };
  return (
    <DrawerClassroom link_active={"invite"}>
      <h1>Send invitations to your students</h1>
      <h2 style={{color:"rgb(105, 105, 105)"}}>To send the invitation, separate each email with a comma</h2>
      <div className={styles.container}>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Add comma separated emails"
        value={inputValue}
        onChange={handleInputChange}
        error={!!error}
        helperText={error}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Button variant="contained" onClick={handleAddInput}>
          Send invitations
        </Button>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        {emails.map((email, index) => (
          <div key={index}>{email}</div>
        ))}
      </Box>
    </Box>
      </div>
    </DrawerClassroom>
   
  );
}