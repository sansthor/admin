import React from "react";

import { Sidebar, TabUser, TabService, TabTransaction } from "../../components";

function TransactionPages(props) {
    const pageTitle = props.pageTitle;
    const addButton = props.addButton;
    const table = props.table;
    const tabUser = <TabUser />;
    const tabService = <TabService />;
    const tabTransaction = <TabTransaction />;

    return (
        <div>
            <Sidebar
                tabService={tabService}
                tabUser={tabUser}
                tabTransaction={tabTransaction}
                table={table}
                addButton={addButton}
                pageTitle={pageTitle}
            />
        </div>
    );
}

export default TransactionPages;
