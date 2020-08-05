import React, { useEffect, useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    DialogTitle,
    Fab,
    MenuItem,
    Select,
} from "@material-ui/core";
// import DialogContentText from "@material-ui/core/DialogContentText";
import Add from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { register } from "../../redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function FormDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [admin, setAdmin] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register(admin));
    };

    return (
        <div>
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleClickOpen}
                style={{ margin: "1em" }}
            >
                <Add />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Form to Add Admin
                </DialogTitle>
                <DialogContent>
                    <form
                        className={classes.formControl}
                        onSubmit={handleSubmit}
                    >
                        <FormControl className={classes.formControl}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                placeholder="Example: admin@gmail.com"
                                type="text"
                                fullWidth
                                name="email"
                                onChange={handleChange}
                                value={admin.email}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="username"
                                label="User Name"
                                placeholder="Example: admin"
                                type="text"
                                fullWidth
                                name="username"
                                onChange={handleChange}
                                value={admin.username}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Password"
                                placeholder="Example: *****"
                                type="password"
                                fullWidth
                                name="password"
                                onChange={handleChange}
                                value={admin.password}
                            />
                        </FormControl>

                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleClose}
                                color="primary"
                            >
                                Create
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
