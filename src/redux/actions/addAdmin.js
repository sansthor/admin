import Swal from 'sweetalert2';
import {
    fetchAllAdmin
} from './admin';
const REGISTER_USER = 'REGISTER_USER';

const registerUser = (payload) => {
    return {
        type: REGISTER_USER,
        payload
    };
};

const register = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/registerAdmin`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log(formData)
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Your Email Successfully Register!',
            text: '',
            icon: 'success',
            confirmButtonText: 'Ok',
        });
    } else {
        Swal.fire({
            title: 'Email already registered',
            text: '',
            icon: 'error',
            confirmButtonText: 'Back'
        });
    }
    dispatch(registerUser(result));
    dispatch(fetchAllAdmin())
}

export {
    REGISTER_USER,
    register,
    registerUser,
};