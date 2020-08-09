import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

function TabData() {
    return (
        <div>
            <List>
                <NavLink
                    to="/admin/admin-dashboard"
                    style={{ textDecoration: "none" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default TabData;
