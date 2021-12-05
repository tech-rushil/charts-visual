import React, { FunctionComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie } from "recharts";

interface DrawChartsProps {
    elements: number[];
    type: string;
}

type ChartsDataArray = { legend: number }[];

const DrawCharts: FunctionComponent<DrawChartsProps> = ({ type, elements }) => {
    let chartsData: ChartsDataArray;

    chartsData = elements.map((ele) => {
        return { legend: ele };
    });
    const renderCharts = () => {
        let jsx = <></>;

        switch (type) {
            case "Bar":
                jsx = (
                    <BarChart data={chartsData}>
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="legend" fill="#8884d8" />
                    </BarChart>
                );
                break;

            case "Pie":
                jsx = (
                    <PieChart width={730} height={250}>
                        <Pie
                            data={chartsData}
                            dataKey="legend"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                );
                break;
            default:
                break;
        }

        return jsx;
    };

    return (
        <>
            <ResponsiveContainer width="100%" height={300}>
                {renderCharts()}
            </ResponsiveContainer>
        </>
    );
};

export default DrawCharts;
