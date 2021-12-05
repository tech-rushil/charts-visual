import React, { FunctionComponent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveChart } from "../../actions";
import { RootState } from "./../../reducers";

interface ChartsDataProps {}

const ChartsData: FunctionComponent<ChartsDataProps> = () => {
    const activeChart = useSelector((state: RootState) => state?.chartsData?.activeChart);
    const activeChartIndex = useSelector((state: RootState) => state?.chartsData?.activeChartIndex);
    const dispatch = useDispatch();

    const elements = activeChart.elements;

    const handleOnTableChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        let value: string | number = e.target.value;
        if (value.length === 0) value = 0;

        const newChartsData = [...elements];
        newChartsData[index] = Number(value);

        dispatch(setActiveChart({ type: activeChart.type, elements: newChartsData }));

        console.log(newChartsData);
    };

    const renderTableRows = () => {
        return elements.map((ele: number, idx: number) => {
            return (
                <tr key={`${activeChartIndex}-${idx}`}>
                    <td className="f-d f-h-c">
                        <input type="number" onChange={(e) => handleOnTableChange(e, idx)} defaultValue={ele} />
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <div className="charts-data lr-pad-d lr-pad-m f-d f-h-c">
                <table>
                    <thead>
                        <tr>
                            <th>Charts Data</th>
                        </tr>
                    </thead>
                    <tbody>{renderTableRows()}</tbody>
                </table>
            </div>

            <style
                // @ts-ignore
                jsx={"true"}
            >
                {`
                    table {
                        font-family: arial, sans-serif;
                        border-collapse: collapse;
                        width: 280px;
                    }

                    input {
                        width: 80%;
                    }

                    td,
                    th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }
                `}
            </style>
        </>
    );
};

export default ChartsData;
