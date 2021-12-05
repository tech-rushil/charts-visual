import { SET_ACTIVE_CHART, SET_ACTIVE_CHART_INDEX, SET_CHARTS_DATA, SET_CHARTS_LOADING } from "../constants/constants";

const initialState = {
    charts: [
        {
            type: "Bar",
            elements: [1, 2, 3, 4, 5],
        },
        {
            type: "Pie",
            elements: [10, 20, 30, 40],
        },
    ],
    activeChart: {
        type: "Bar",
        elements: [1, 2, 3, 4, 5],
    },
    loading: true,
    activeChartIndex: 0,
};

const ChartsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CHARTS_DATA:
            return { ...state, charts: payload };
        case SET_CHARTS_LOADING:
            return { ...state, loading: payload };
        case SET_ACTIVE_CHART:
            return { ...state, activeChart: payload };
        case SET_ACTIVE_CHART_INDEX:
            return { ...state, activeChartIndex: payload };
        default:
            return state;
    }
};

export default ChartsReducer;
