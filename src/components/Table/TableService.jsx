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
    Button,
    Avatar,
    TextField,
} from "@material-ui/core";
import { Pageview } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllService, deleteService } from "../../redux/actions";
import { fetchFilterService } from "../../redux/actions";

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

export default function TableUser(props) {
    const dispatch = useDispatch();

    const service = useSelector((state) => state.service);
    useSelector((state) => state.searchDataService);

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [input, setinput] = useState("");

    const columns = [
        { id: "createdAt", label: "Created At", minWidth: 170 },
        { id: "id", label: "ID", minWidth: 170 },
        { id: "title", label: "Title", minWidth: 100 },

        {
            id: "price",
            label: "Price",
            minWidth: 170,
            align: "right",
        },
        {
            id: "fullname",
            label: "Fullname",
            minWidth: 170,
            align: "right",
        },
        {
            align: "right",
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        dispatch(fetchFilterService(input));
    };

    const handleDelete = (id) => {
        dispatch(deleteService(id));
        dispatch(fetchAllService());
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
            dispatch(fetchFilterService());
        } else {
            dispatch(fetchAllService());
        }
    }, [dispatch, input]);

    return (
        <Paper className={classes.root}>
            {service !== null && (
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
                                label="Search Title"
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
                        {service !== null &&
                            service
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
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>{user.title}</TableCell>
                                            <TableCell>{user.price}</TableCell>
                                            <TableCell>
                                                {user.userID !== undefined &&
                                                    user.userID.fullname}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    onClick={() =>
                                                        handleDelete(user._id)
                                                    }
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Delete
                                                </Button>
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
                count={service !== null && service.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
