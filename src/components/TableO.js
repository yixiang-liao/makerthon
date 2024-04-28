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
      fontSize: 16,
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

const TableO = ({ items }) => {
    const [data, setData] = useState([]);

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

        const fetchAllData = () => {
          items.forEach(item => {
            fetchData(item.url, setData);
          });
        };
          fetchAllData(); // 立即获取一次数据
  
      const interval = setInterval(fetchAllData, 10000); // 每10秒钟获取一次数据
  
      return () => clearInterval(interval);
    }, [items]);
  return (
    <div className='table'>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
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
                {data?.map((dataItem, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {dataItem.using}
                    </StyledTableCell>
                    <StyledTableCell align="center"><div className='red'>{dataItem.CheckIn}</div></StyledTableCell>
                    <StyledTableCell align="center">{dataItem.wait}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  )
}

export default TableO;
