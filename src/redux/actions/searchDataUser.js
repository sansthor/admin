const GET_FILTER_USER = "GET_FILTER_USER";

const fetchFilterUser = (fullname) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/getUserData/?fullname=${fullname}`;
        const options = {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({
            type: GET_FILTER_USER,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    GET_FILTER_USER,
    fetchFilterUser
};