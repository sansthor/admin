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
    Box,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../../redux/actions";

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

export default function TableUser(props) {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columns = [
        { id: "createdAt", label: "Created At", minWidth: 100 },
        { id: "role", label: "Role", minWidth: 100 },
        { id: "id", label: "ID", minWidth: 120 },
        { id: "fullname", label: "Full Name", minWidth: 100 },

        {
            id: "username",
            label: "User Name",
            minWidth: 100,
            align: "right",
        },
        {
            id: "email",
            label: "Email",
            minWidth: 100,
            align: "right",
        },
        {
            id: "address",
            label: "Address",
            minWidth: 100,
            align: "right",
        },
        {
            id: "balance",
            label: "Balance",
            minWidth: 100,
            align: "right",
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [dispatch]);

    return (
        <Paper className={classes.root}>
            {userData !== null && (
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
                        {userData !== null &&
                            userData
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((user) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                        >
                                            <TableCell>
                                                {user.createdAt}
                                            </TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>
                                                {user.fullname}
                                            </TableCell>
                                            <TableCell>
                                                {user.username}
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                {user.address}
                                            </TableCell>
                                            <TableCell>
                                                {user.balance}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={userData !== null && userData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
