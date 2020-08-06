const GET_FILTER_ADMIN = "GET_FILTER_ADMIN";

const fetchFilterAdmin = (username) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/getFilterDataAdmin/?username=${username}`;
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
            type: GET_FILTER_ADMIN,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    GET_FILTER_ADMIN,
    fetchFilterAdmin
};