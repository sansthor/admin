import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    FormControl,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { makeStyles } from "@material-ui/core/styles";
import { deletes } from "../../redux/actions";
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

export default function ModalDeleteData(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deletes(props.id));
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                size="medium"
            >
                <DeleteOutlineIcon />
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure Want to Delete ?"}
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <FormControl className={classes.formControl}>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleClose}
                                color="primary"
                            >
                                Delete
                            </Button>
                        </DialogActions>
                    </FormControl>
                </form>
            </Dialog>
        </div>
    );
}
