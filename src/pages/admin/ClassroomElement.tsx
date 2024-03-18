import * as React from 'react';
import DrawerClassroom from '../../component/admin/DrawerClassroom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ClassroomElement() {
  return (
    <DrawerClassroom link_active={"platform"}>
      <div>
        <Typography variant="h4" gutterBottom>
          Access to the platform
        </Typography>
        <Typography variant="h6" mt={2} mb={2} gutterBottom>
        Enter the platform and practice together with students!
        </Typography>
        
        <Link to={"/home"}>
        <Button variant="contained" color="primary">
          Enter platform
        </Button>
        </Link>
      </div>
    </DrawerClassroom>
  );
}
