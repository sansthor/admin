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
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import { Pageview } from "@material-ui/icons";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchAllTransaction,
    transferBalance,
    fetchAllDone,
    fetchFilterTransaction,
} from "../../redux/actions";

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

export default function TableTransaction(props) {
    const dispatch = useDispatch();

    const transactionData = useSelector((state) => state.transactionData);
    useSelector((state) => state.searchDataTransaction);

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [input, setinput] = useState("");

    console.log(transactionData.userID);
    const columns = [
        { id: "createdAt", label: "Created At", minWidth: 120 },
        { id: "username", label: "User Name", minWidth: 120 },
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
        {
            id: "option",
            label: "Option",
            align: "right",
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        dispatch(fetchFilterTransaction(input));
    };

    const handleClick = (id) => {
        dispatch(transferBalance(id));
        dispatch(fetchAllTransaction());
    };

    const handleDone = () => {
        dispatch(fetchAllDone());
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
            dispatch(fetchFilterTransaction());
        } else {
            dispatch(fetchAllTransaction());
        }
    }, [dispatch, input]);

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
                >
                    <Box component="div" style={{ marginTop: "20px" }}>
                        <Avatar style={{ background: "#7fdbda" }}>
                            <Pageview />
                        </Avatar>
                    </Box>
                    <Box component="div" style={{ margin: "1em" }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Search Status"
                                variant="outlined"
                                onKeyPress={handleKeyPress}
                            />
                        </form>
                    </Box>
                </Box>
            )}
            <h3>Filter</h3>
            <Button variant="contained" color="primary" onClick={handleDone}>
                All Status Done
            </Button>
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
                                            <TableCell>
                                                {moment(user.createdAt).format(
                                                    "MMMM Do YYYY, h:mm:ss a"
                                                )}
                                            </TableCell>
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
                                            <TableCell>
                                                {user.total === 0 &&
                                                user.userStatus === "DONE" &&
                                                user.talentSTatus === "DONE" ? (
                                                    <Button
                                                        disabled
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() =>
                                                            handleClick(
                                                                user._id
                                                            )
                                                        }
                                                    >
                                                        Transfer
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() =>
                                                            handleClick(
                                                                user._id
                                                            )
                                                        }
                                                    >
                                                        <SyncAltIcon />
                                                        Transfer
                                                    </Button>
                                                )}
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
                count={transactionData !== null && transactionData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
