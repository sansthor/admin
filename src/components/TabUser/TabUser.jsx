import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import { ListAltRounded } from "@material-ui/icons";

function TabUser() {
    return (
        <div>
            <List>
                <NavLink to="/admin/user" style={{ textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <ListAltRounded />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default TabUser;
