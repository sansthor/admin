import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    DialogTitle,
    TextField,
    MenuItem,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { updateService, fetchAllService } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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
    const [category, setCategory] = useState({ category: "" });

    useEffect(() => {
        dispatch(fetchAllService());
    }, [dispatch]);

    const handleChange = (event) => {
        setCategory({ category: event.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(updateService(category, props.id));
    };

    const categories = [
        {
            value: "COMMON",
            label: "Common",
        },
        {
            value: "BEST",
            label: "Best",
        },
        {
            value: "POPULAR",
            label: "Popular",
        },
    ];

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
                                id="standard-select-currency"
                                select
                                label="Select"
                                value={category.category}
                                onChange={handleChange}
                                helperText="Please select your category"
                            >
                                {categories.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
