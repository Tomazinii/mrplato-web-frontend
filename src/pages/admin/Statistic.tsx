import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DrawerClassroom from '../../component/admin/DrawerClassroom';

const Students = () => {
  // Mock data for students and their activities
  const students = [
    { name: 'João', email: 'joao@example.com', enrollment: '2021001', activities: [
      { type: 'Exercises', problems: ['Problem 1', 'Problem 2', 'Problem 3'] },
      { type: 'Tournament', problems: ['Problem 4', 'Problem 5'] },
      { type: 'Challenge', problems: ['Problem 6'] }
    ] },
    { name: 'Maria', email: 'maria@example.com', enrollment: '2021002', activities: [
      { type: 'Exercises', problems: ['Problem 2', 'Problem 3', 'Problem 4'] },
      { type: 'Tournament', problems: ['Problem 1', 'Problem 5'] },
      { type: 'Challenge', problems: ['Problem 6', 'Problem 7'] }
    ] },
    // Add more students as needed
  ];

  // Function to render list of problems for each activity
  const renderProblems = (problems: any) => (
    <ul>
      {problems.map((problem: any, index:any) => (
        <li key={index}>{problem}</li>
      ))}
    </ul>
  );

  // Function to generate report
  const generateReport = () => {
    // Implement your report generation logic here
    alert('Report generated!');
  };

  return (
    <DrawerClassroom link_active={"statistic"}>
      <div>
        <div style={{  marginBottom: '1rem' }}>
          <Typography variant="h6">
            Classroom Statistic
          </Typography>
          <Button style={{marginTop:"20px"}} variant="contained" onClick={generateReport}>download complete report</Button>
        </div>
        <TableContainer style={{marginTop:"50px"}} component={Paper}>
          <Table aria-label="students activities table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Enrollment</TableCell>
                <TableCell>Exercises Problems</TableCell>
                <TableCell>Challenges Problems</TableCell>
                <TableCell>Tournament Problems</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrollment}</TableCell>
                  {/* Render each activity cell */}
                  <TableCell>{10}</TableCell>
                  <TableCell>{renderProblems(student.activities.find(activity => activity.type === 'Tournament')?.problems)}</TableCell>
                  <TableCell>{renderProblems(student.activities.find(activity => activity.type === 'Challenge')?.problems)}</TableCell>
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
