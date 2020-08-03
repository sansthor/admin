import React from "react";

import { Sidebar, TabUser, TabService } from "../../components";

function ServicePages(props) {
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

export default ServicePages;
