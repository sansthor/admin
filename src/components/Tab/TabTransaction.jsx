import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function TabTransaction() {
    return (
        <div>
            <List>
                <NavLink
                    to="/admin/service-transaction"
                    style={{ textDecoration: "none" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transaction" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default TabTransaction;
