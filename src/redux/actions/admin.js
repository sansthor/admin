const GET_ALL_ADMIN = "GET_ALL_ADMIN";

const fetchAllAdmin = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/admin`;
        const options = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({
            type: GET_ALL_ADMIN,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    GET_ALL_ADMIN,
    fetchAllAdmin
};