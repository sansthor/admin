import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import { AssignmentIndRounded } from "@material-ui/icons";

function TabService() {
    return (
        <div>
            <List>
                <NavLink to="/admin/service-pages" style={{ textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIndRounded />
                        </ListItemIcon>
                        <ListItemText primary="Service" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default TabService;
