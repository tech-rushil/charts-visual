import axios from "axios";
import {
    SET_CHARTS_LOADING,
    SET_CHARTS_DATA,
    CHARTS_API,
    SET_ACTIVE_CHART,
    SET_ACTIVE_CHART_INDEX,
} from "../constants/constants";

export const setChartsLoading = (payload) => ({
    type: SET_CHARTS_LOADING,
    payload,
});

export const setChartsData = (payload) => ({
    type: SET_CHARTS_DATA,
    payload,
});

export const setActiveChart = (payload) => ({
    type: SET_ACTIVE_CHART,
    payload,
});

export const setActiveChartIndex = (payload) => ({
    type: SET_ACTIVE_CHART_INDEX,
    payload,
});

export const fetchChartsData = () => {
    return (dispatch) => {
        dispatch(setChartsLoading(true));

        axios
            .get(`${CHARTS_API}`)
            .then((res) => {
                if (res?.data) {
                    dispatch(setChartsData(res.data));
                    dispatch(setActiveChart(res.data?.[0]));
                }

                dispatch(setChartsLoading(false));
            })
            .catch((err) => {
                //  dispatch error action
            });
    };
};
