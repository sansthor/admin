const GET_FILTER_SERVICE = "GET_FILTER_SERVICE";

const fetchFilterService = (title) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/getFilterServiceData/?title=${title}`;
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
            type: GET_FILTER_SERVICE,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    GET_FILTER_SERVICE,
    fetchFilterService
};