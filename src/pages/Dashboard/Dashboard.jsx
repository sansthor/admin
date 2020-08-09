import React from "react";

import {
    Sidebar,
    TabUser,
    TabService,
    TabTransaction,
    TabAdmin,
    TabData,
    Card,
} from "../../components";

function DashboardPages(props) {
    const pageTitle = props.pageTitle;
    const addButton = props.addButton;
    const table = props.table;
    const card = <Card />;
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
                card={card}
                addButton={addButton}
                pageTitle={pageTitle}
            />
        </div>
    );
}

export default DashboardPages;
