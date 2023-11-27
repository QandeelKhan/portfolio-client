import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Project Progress Chart",
        },
    },
    scales: {
        y: {
            max: 100,
            ticks: {
                stepSize: 20,
            },
        },
    },
};

type AoBarChartProps = {
    designData: number;
    frontendData: number;
    backendData: number;
};

export const AoBarChart: React.FC<AoBarChartProps> = (props) => {
    const labels = [""];
    const data = {
        labels,
        datasets: [
            {
                label: "Design",
                data: [props.designData],
                backgroundColor: ["#44b4e0"],
                borderColor: "white",
                borderWidth: 2,
            },
            {
                label: "Frontend",
                data: [props.frontendData],
                backgroundColor: ["#ff9999"],
                borderColor: "white",
                borderWidth: 2,
            },
            {
                label: "Backend",
                data: [props.backendData],
                backgroundColor: ["grey"],
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    return <Bar options={options} data={data} />;
};
