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
import { faker } from "@faker-js/faker";

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

const labels = [""];
export const data = {
    labels,
    datasets: [
        {
            label: "Design",
            data: [20],
            backgroundColor: ["#44b4e0"],
            borderColor: "white",
            borderWidth: 2,
        },
        {
            label: "Frontend",
            data: [50],
            backgroundColor: ["#ff9999"],
            borderColor: "white",
            borderWidth: 2,
        },
        {
            label: "Backend",
            data: [80],
            backgroundColor: ["grey"],
            borderColor: "white",
            borderWidth: 2,
        },
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
