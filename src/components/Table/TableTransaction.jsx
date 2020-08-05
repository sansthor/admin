import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Box,Button
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransaction, transferBalance, fetchAllDone } from "../../redux/actions";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 440,
    },
});

export default function TableTransaction(props) {
    const dispatch = useDispatch();
    const transactionData = useSelector((state) => state.transactionData);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    console.log(transactionData);
    const columns = [
        { id: "id", label: "ID", minWidth: 120 },
        { id: "status", label: "Status", minWidth: 100 },

        {
            id: "talentstatus",
            label: "Talent Status",
            minWidth: 100,
            align: "right",
        },
        {
            id: "userstatus",
            label: "User Status",
            minWidth: 100,
            align: "right",
        },
        {
            id: "total",
            label: "Total",
            minWidth: 100,
            align: "right",
        },
        {
            id: "quantity",
            label: "Quantity",
            minWidth: 100,
            align: "right",
        },
    ];
    
    

    const handleClick = (id) =>{
       
        dispatch(transferBalance(id))
        dispatch(fetchAllTransaction());
    } 

    const handleDone = () => {
        dispatch(fetchAllDone())
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(fetchAllTransaction());
    }, [dispatch]);
    
    return (
        <Paper className={classes.root}>
            {transactionData !== null && (
                <Box
                    component="div"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                ></Box>
            )}
            
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    style={{ minWidth: "170" }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactionData !== null &&
                            transactionData
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((user, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                        >
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>{user.status}</TableCell>
                                            <TableCell>
                                                {user.talentStatus}
                                            </TableCell>
                                            <TableCell>
                                                {user.userStatus}
                                            </TableCell>
                                            <TableCell>{user.total}</TableCell>
                                            <TableCell>
                                                {user.quantity}
                                               
                                            </TableCell>
                                    <Button variant='contained' color='primary' onClick={() => handleClick(user._id)}>Transfer</Button>
                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
            </TableContainer>
           
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={transactionData !== null && transactionData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Button variant='contained' color='primary' onClick={handleDone}>All Status Done</Button>
        </Paper>
        
    );
}
