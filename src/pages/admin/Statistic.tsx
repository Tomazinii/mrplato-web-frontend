import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DrawerClassroom from '../../component/admin/DrawerClassroom';
import { InputCreateReport, create_report } from '../../api/Classroom.api';
import { ContextClassroom } from '../../context/ContextClassroom';
import { InputGetAllStudentFunction, getAllStudentsFunction } from '../../utils/classroom/getAllStudentsFunction';

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
    const props: InputCreateReport = {
      classroom_id: String(localStorage.getItem('classroom_id'))
    }
    create_report(props)
  };

  return (
    <DrawerClassroom link_active={"statistic"}>
      <div>
        <div style={{  marginBottom: '1rem' }}>
          <Typography variant="h6">
            Classroom Statistic
          </Typography>
          <Button style={{marginTop:"20px"}} variant="contained" onClick={generateReport}>download complete report .csv</Button>
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
            {stateClassroom && stateClassroom.students && stateClassroom.students.map((student: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrollment}</TableCell>
                  {/* Render each activity cell */}
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  {/* <TableCell>{renderProblems(student.activities.find(activity => activity.type === 'Tournament')?.problems)}</TableCell> */}
                  <TableCell>-</TableCell>
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
