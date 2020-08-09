import React from "react";

import {
    Sidebar,
    TabUser,
    TabService,
    TabTransaction,
    TabAdmin,
    TabData,
} from "../../components";

function AdminPages(props) {
    const pageTitle = props.pageTitle;
    const addButton = props.addButton;
    const table = props.table;
    const tabAdmin = <TabAdmin />;
    const tabData = <TabData />;
    const tabUser = <TabUser />;
    const tabService = <TabService />;
    const tabTransaction = <TabTransaction />;

    return (
        <div>
            <Sidebar
                tabAdmin={tabAdmin}
                tabData={tabData}
                tabUser={tabUser}
                tabService={tabService}
                tabTransaction={tabTransaction}
                table={table}
                addButton={addButton}
                pageTitle={pageTitle}
            />
        </div>
    );
}

export default AdminPages;
