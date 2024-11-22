import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

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

function createData(
    no: number,
    fullName: string,
    gender: string,
    birdth: string,
    address: string,
    grade: number,
    absent: number
) {
    return { no, fullName, gender, birdth, address, grade, absent };
}
const rows = [
    createData(1, 'Frozen yoghurt', '159', '6', '24', 4, 0),
    createData(2, 'Ice cream sandwich', '237', '9', '37', 4.3, 0),
    createData(3, 'Eclair', '262', '16.0', '24', 6.0, 0),
    createData(4, 'Cupcake', '305', '3.7', '67', 4.3, 0),
    createData(5, 'Gingerbread', '356', '16.0', '49', 3.9, 0),
];


const ClassDetail = () => {
    const { id } = useParams();//lay id tu url
    const getCurrentDate = (): string => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };
    return (
        <>
            <div className="text-center font-bold text-2xl">
                THÔNG TIN LỚP HỌC
            </div>
            <Box sx={{ display: 'flex', gap: '16px' }}>
                <strong>Mã lớp học:</strong> <span>{id}</span>
                <strong>Tên học phần:</strong> <span>LTMM1324</span>
                <strong>Môn học:</strong> <span>Lý thuyết mật mã</span>
                <strong>Teacher:</strong> <span>Đỗ Trọng Tấn</span>
                <strong>Hình thức giảng dạy:</strong><span>Offline</span>
                <strong>Lịch học:</strong><span>Thứ hai-Thứ sáu</span>
                <strong>Thời gian:</strong><span>14h-15h30</span>
            </Box>

            {/* Thanh tìm kiếm */}
            <TextField
                label="Tìm kiếm"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>No.</StyledTableCell>
                            <StyledTableCell align="center">Full Name</StyledTableCell>
                            <StyledTableCell align="center">Gender</StyledTableCell>
                            <StyledTableCell align="center">Birth</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Grade</StyledTableCell>
                            <StyledTableCell align="center">Absent</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.no}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.no}
                                </StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.fullName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                                <StyledTableCell align="center">{row.birdth}</StyledTableCell>
                                <StyledTableCell align="center">{row.address}</StyledTableCell>
                                <StyledTableCell align="center">{row.grade}</StyledTableCell>
                                <StyledTableCell align="center">{row.absent}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="flex justify-between w-full p-4">
                <div>
                    <strong>Sĩ số lớp: </strong>
                    <span>{rows.length}</span>
                </div>
                <div className="text-right">
                    <strong>Ngày: </strong>
                    <span>{getCurrentDate()}</span>
                </div>
            </div>
        </>
    );
};
export default ClassDetail;