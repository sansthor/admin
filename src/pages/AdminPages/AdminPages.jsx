import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import TabUser from "../../components/TabUser/TabUser";
import TabService from "../../components/TabService/TabService";

function AdminPages(props) {
    const pageTitle = props.pageTitle;
    const addButton = props.addButton;
    const table = props.table;
    const tabUser = <TabUser />;
    const tabService = <TabService />;
    return (
        <div>
            <Sidebar
                tabService={tabService}
                tabUser={tabUser}
                table={table}
                addButton={addButton}
                pageTitle={pageTitle}
            />
        </div>
    );
}

export default AdminPages;
