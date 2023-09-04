import { createAction } from "@reduxjs/toolkit";

const add_Users = createAction('add_users', (data) => {
    return {
        payload: data
    }
});

export default { add_Users };