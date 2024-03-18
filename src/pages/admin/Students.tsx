import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DrawerClassroom from '../../component/admin/DrawerClassroom';

const Students = () => {
  // Mock data for students
  const students = [
    { name: 'João', email: 'joao@example.com', enrollment: '2021001' },
    { name: 'Maria', email: 'maria@example.com', enrollment: '2021002' },
    { name: 'Pedro', email: 'pedro@example.com', enrollment: '2021003' },
  ];

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
              {students.map((student, index) => (
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
