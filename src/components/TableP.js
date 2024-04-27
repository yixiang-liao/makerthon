import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableP = () => {
    const [data, setData] = useState([]);
    const [Bdata, setBData] = useState([]);
    const [Cdata, setCData] = useState([]);
    const [Ddata, setDData] = useState([]);

    useEffect(() => {
      const fetchData = (url, setDataFunc) => {
        Papa.parse(
          url,
          {
            download: true,
            header: true,
            complete: function (results) {
              const parsedData = results.data;
              console.log(parsedData);
              setDataFunc(parsedData);
            },
            error: function (error) {
              console.warn(error);
            }
          }
        );
      };

      fetchData(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1602056620',
        setData
      );

      fetchData(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1077283877',
        setBData
      );

      fetchData(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=468671024',
        setCData
      );

      fetchData(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLeoKHXZi-jr312GHN7w7ExSHZxArIdt8qhPo_KVVSiZrBlIdH3gwL30Qd3PgJh8E-wVbbuoKkDU-E/pub?output=csv&gid=1227004105',
        setDData
      );
    }, []);

    return (
      <div className='table'>
        <div className='mmm'>
          <div className='center'>
            <h2>木工</h2>
            <TableContainer component={Paper} className='tableA'>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">使用中</StyledTableCell>
                    <StyledTableCell align="center">可報到</StyledTableCell>
                    <StyledTableCell align="center">候位中</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, i) => (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {item.using}
                      </StyledTableCell>
                      <StyledTableCell align="center">{item.CheckIn}</StyledTableCell>
                      <StyledTableCell align="center">{item.wait}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='center'>
            <h2>機工</h2>
            <TableContainer component={Paper} className='tableA'>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">使用中</StyledTableCell>
                    <StyledTableCell align="center">可報到</StyledTableCell>
                    <StyledTableCell align="center">候位中</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Bdata?.map((item, i) => (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {item.using}
                      </StyledTableCell>
                      <StyledTableCell align="center">{item.CheckIn}</StyledTableCell>
                      <StyledTableCell align="center">{item.wait}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='center'>
            <h2>文創</h2>
            <TableContainer component={Paper} className='tableA'>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">使用中</StyledTableCell>
                    <StyledTableCell align="center">可報到</StyledTableCell>
                    <StyledTableCell align="center">候位中</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Cdata?.map((item, i) => (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {item.using}
                      </StyledTableCell>
                      <StyledTableCell align="center">{item.CheckIn}</StyledTableCell>
                      <StyledTableCell align="center">{item.wait}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='center'>
            <h2>材料室</h2>
            <TableContainer component={Paper} className='tableA'>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">使用中</StyledTableCell>
                    <StyledTableCell align="center">可報到</StyledTableCell>
                    <StyledTableCell align="center">候位中</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Ddata?.map((item, i) => (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {item.using}
                      </StyledTableCell>
                      <StyledTableCell align="center">{item.CheckIn}</StyledTableCell>
                      <StyledTableCell align="center">{item.wait}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
}

export default TableP;
