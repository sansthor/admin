import React, { useState } from "react";
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
    Avatar,
    TextField,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import { Pageview } from "@material-ui/icons";

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
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [userData, setUserData] = useState(null);
    const [input, setInput] = useState("");

    const columns = [
        { id: "id", label: "ID", minWidth: 170 },
        { id: "name", label: "Name", minWidth: 100 },

        {
            id: "email",
            label: "Email",
            minWidth: 170,
            align: "right",
        },
        {
            id: "service",
            label: "Service",
            minWidth: 170,
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

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

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
                >
                    <Box component="div" style={{ marginTop: "20px" }}>
                        <Avatar style={{ background: "#e7305b" }}>
                            <Pageview />
                        </Avatar>
                    </Box>
                    <Box component="div" style={{ margin: "1em" }}>
                        <form onSubmit={handleSubmit}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={userData !== null && userData}
                                getOptionLabel={(option) => option.name}
                                style={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search User Name"
                                        variant="outlined"
                                        onSelect={handleChange}
                                        value={input}
                                    />
                                )}
                            />
                        </form>
                    </Box>
                </Box>
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
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>
                                                {user.fullname}
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
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
