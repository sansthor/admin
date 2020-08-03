import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import TabTask from "../../components/TabTask/TabTask";
import TabEmployee from "../../components/TabEmployee/TabEmployee";

function AdminPages(props) {
    const pageTitle = props.pageTitle;
    const addButton = props.addButton;
    const table = props.table;
    const tabTasks = <TabTask />;
    const tabEmployee = <TabEmployee />;
    return (
        <div>
            <Sidebar
                tabEmployee={tabEmployee}
                tabTasks={tabTasks}
                table={table}
                addButton={addButton}
                pageTitle={pageTitle}
            />
        </div>
    );
}

export default AdminPages;
