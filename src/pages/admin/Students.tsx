import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DrawerClassroom from '../../component/admin/DrawerClassroom';
import { InputGetAllStudentFunction, getAllStudentsFunction } from '../../utils/classroom/getAllStudentsFunction';
import { ContextUser } from '../../context/ContenxtUser';
import { ContextClassroom } from '../../context/ContextClassroom';

const Students = () => {
  // Mock data for students
  const {stateClassroom, dispatchClassroom} = React.useContext(ContextClassroom) || {};
  
  React.useEffect(()=>{

    const input: InputGetAllStudentFunction = {
      classroom_id: String(localStorage.getItem('classroom_id')),
      dispatch: dispatchClassroom && dispatchClassroom
    }
    getAllStudentsFunction(input)

  },[])


  return (
    <DrawerClassroom link_active={"students"}>
      <div>
        <Typography variant="h6" gutterBottom>
          Students: {localStorage.getItem("class_name")?.toUpperCase()}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="students table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Matrícula</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateClassroom && stateClassroom.students && stateClassroom.students.map((student: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrollment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DrawerClassroom>
  );
};

export default Students;
