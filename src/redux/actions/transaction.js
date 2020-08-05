const GET_ALL_TRANSACTION = "GET_ALL_Transaction";
const TRANSFER_BALANCE = 'TRANSFER BALANCE'
const GET_ALL_DONE = 'GET_ALL_DONE'

const transfer = (data) => {
    return {
        type: TRANSFER_BALANCE,
        data
    }
}


const fetchAllTransaction = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/transaction`;
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

const fetchAllDone = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/order/status/done`;
        const options = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({
            type: GET_ALL_DONE,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};


const transferBalance = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/admin/order/transfer/${id}`
        const options = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: "PUT",
            body: {
                'Content-type': 'application/json'
            }
        };

        const response = await fetch(url, options)
        const result = await response.json()

        dispatch(fetchAllTransaction())


    } catch (error) {
        console.log(error);
    }
}

export {
    GET_ALL_TRANSACTION,
    fetchAllTransaction,
    TRANSFER_BALANCE,
    transferBalance,
    transfer,
    GET_ALL_DONE,
    fetchAllDone
};