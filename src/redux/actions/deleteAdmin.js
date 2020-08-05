import Swal from "sweetalert2";
import {
    fetchAllAdmin
} from './admin'

const DELETE_USER = "DELETE_USER";

const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload,
    };
};

const deletes = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/deletedataadmin/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(url, options);

    if (response.status === 200) {
        Swal.fire({
            title: "Your Data Successfully Delete!",
            text: "",
            icon: "success",
            confirmButtonText: "Ok",
        });
    } else {
        Swal.fire({
            title: "Your Data Delete Failed!",
            text: "",
            icon: "error",
            confirmButtonText: "Back",
        });
    }
    dispatch(fetchAllAdmin());
};

export {
    DELETE_USER,
    deletes,
    deleteUser
};