import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartsData, setActiveChart, setActiveChartIndex } from "./actions";
import ChartsData from "./component/Charts/ChartsData";
import DrawCharts from "./component/Charts/DrawCharts";
import { RootState } from "./reducers";
import { Select, Divider } from "antd";

const { Option } = Select;

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChartsData());
    }, [dispatch]);

    const activeChart = useSelector((state: RootState) => state?.chartsData?.activeChart);
    const chartsData = useSelector((state: RootState) => state?.chartsData?.charts);

    const handleChange = (value: string) => {
        let index: number = Number(value);
        const selectedChart = chartsData[index];
        dispatch(setActiveChart(selectedChart));
        dispatch(setActiveChartIndex(index));
    };

    return (
        <div className="App">
            <div className="charts-container">
                <DrawCharts elements={activeChart.elements} type={activeChart.type} />
                <Divider />
                <div className="chart-detail f-d f-h-c f-v-c f-vt">
                    <div className="chart-select f-d f-v-c f-h-c">
                        <div className="title h3-heading">Current Chart</div>
                        <Select defaultValue={"0"} style={{ width: 120 }} onChange={handleChange}>
                            {chartsData.map((ele: {}, idx: number) => (
                                <Option value={idx.toString()} key={idx}>{`Chart ${idx}`}</Option>
                            ))}
                        </Select>
                    </div>
                    <Divider />
                    <ChartsData />
                </div>
            </div>
            <style
                // @ts-ignore
                jsx={"true"}
            >
                {`
                    .charts-container {
                        width: 60%;
                        padding: 2rem;
                        background-color: var(--dove);
                        border-radius: 4px;
                        box-shadow: var(--peaky-shadow-high);
                        margin: 0 auto;
                    }

                    .chart-select .title {
                        margin-right: 16px;
                    }
                `}
            </style>
        </div>
    );
};

export default App;
