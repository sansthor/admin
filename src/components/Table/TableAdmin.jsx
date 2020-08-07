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
    Avatar,
    TextField,
} from "@material-ui/core";

import moment from "moment";
import { Pageview } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllAdmin } from "../../redux/actions";
import { fetchFilterAdmin } from "../../redux/actions";

import ModalEditData from "../ModalEdit/ModalEdit";
import ModalDeleteData from "../ModalDelete/ModalDelete";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#002858",
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

export default function TableAdmin(props) {
    const dispatch = useDispatch();

    const adminData = useSelector((state) => state.adminData);
    useSelector((state) => state.searchDataAdmin);

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [input, setinput] = useState("");

    const columns = [
        { id: "createdAt", label: "Created At", minWidth: 120 },
        { id: "id", label: "ID", minWidth: 120 },
        { id: "email", label: "Email", minWidth: 100 },
        { id: "username", label: "UserName", minWidth: 100 },
        { id: "options", label: "Options", minWidth: 100 },
        { id: "options", label: "", minWidth: 100 },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        dispatch(fetchFilterAdmin(input));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            let key = event.target.value;

            setinput(key);
            key = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
        }
    };

    useEffect(() => {
        if (input !== "") {
            dispatch(fetchFilterAdmin());
        } else {
            dispatch(fetchAllAdmin());
        }
    }, [dispatch, input]);

    return (
        <Paper className={classes.root}>
            {adminData !== null && (
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
                        <Avatar style={{ background: "#7fdbda" }}>
                            <Pageview />
                        </Avatar>
                    </Box>
                    <Box component="div" style={{ margin: "1em" }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Search Admin Name"
                                variant="outlined"
                                onKeyPress={handleKeyPress}
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
                        {adminData !== null &&
                            adminData
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
                                                {moment(user.createdAt).format(
                                                    "MMMM Do YYYY, h:mm:ss a"
                                                )}
                                            </TableCell>
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                {user.username}
                                            </TableCell>
                                            <TableCell>
                                                <ModalEditData id={user._id} />
                                            </TableCell>
                                            <TableCell>
                                                <ModalDeleteData
                                                    id={user._id}
                                                />
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
                count={adminData !== null && adminData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
