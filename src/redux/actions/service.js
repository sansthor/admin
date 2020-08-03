const GET_ALL_SERVICE = "GET_ALL_SERVICE";

const fetchAllService = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/service`;
        const options = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_ALL_SERVICE, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export { GET_ALL_SERVICE, fetchAllService };
