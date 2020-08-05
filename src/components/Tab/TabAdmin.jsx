import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

function TabTransaction() {
    return (
        <div>
            <List>
                <NavLink
                    to="/admin/admin-dataadmin"
                    style={{ textDecoration: "none" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <SupervisorAccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="Admin" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default TabTransaction;
