import Swal from "sweetalert2";
const EDIT_USER = "EDIT_USER";

const editUser = (payload) => {
    return {
        type: EDIT_USER,
        payload,
    };
};

const edit = (formData, id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/updatedataadmin/${id}`;
    const options = {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };
    console.log(formData);
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: "Your Data Successfully Updated!",
            text: "",
            icon: "success",
            confirmButtonText: "Ok",
        });
    } else {
        Swal.fire({
            title: "Your Data Update Failed!",
            text: "",
            icon: "error",
            confirmButtonText: "Back",
        });
    }
    dispatch(editUser(result));
};

export { EDIT_USER, edit, editUser };
