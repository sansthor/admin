import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    DialogTitle,
    TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { edit } from "../../redux/actions";
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

export default function ModalEditData(props) {
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
        dispatch(edit(admin, props.id));
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                size="medium"
            >
                <EditIcon />
                Edit
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Data</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
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
                                Confirm
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
