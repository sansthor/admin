import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchAllTransaction,
    fetchAllUser,
    fetchAllService,
} from "../../redux/actions";

const StyledCard = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    flex-direction: column;
    @media (max-width: 1000px) {
        height: 800px;
    }
    `;

const Title = Styled.h1`
    font-size: 32px;
    text-align: center;
    color: white;
`;

const Titles = Styled.h1`
    font-size: 42px;
    text-align: center;
    
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SimpleCard() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const userData = useSelector((state) => state.userData);

    const service = useSelector((state) => state.service);

    const transactionData = useSelector((state) => state.transactionData);

    const data = transactionData.map((item) => {
        return item.length;
    });

    const dataService = service.map((item) => {
        return item.length;
    });

    const dataUser = userData.map((item) => {
        return item.length;
    });

    useEffect(() => {
        dispatch(fetchAllTransaction());
        dispatch(fetchAllUser());
        dispatch(fetchAllService());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <StyledCard>
                <Titles>Dashboard</Titles>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card
                            style={{
                                backgroundColor: "#002858",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title>Data User</Title>
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title as="h2">{dataUser.length}</Title>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} lg={4}>
                        <Card
                            style={{
                                backgroundColor: "#002858",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title>Data Service</Title>
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title as="h2">{dataService.length}</Title>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} lg={4}>
                        <Card
                            style={{
                                backgroundColor: "#002858",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title>Data Transaction</Title>
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                >
                                    <Title as="h2">{data.length}</Title>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </StyledCard>
        </div>
    );
}
