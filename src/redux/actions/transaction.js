const GET_ALL_TRANSACTION = "GET_ALL_Transaction";

const fetchAllTransaction = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/order`;
        const options = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({
            type: GET_ALL_TRANSACTION,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    GET_ALL_TRANSACTION,
    fetchAllTransaction
};