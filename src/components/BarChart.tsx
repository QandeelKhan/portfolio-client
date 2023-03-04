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
    // aspectRatio: 1.8,
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
};

const labels = ["Design", "Frontend", "Backend"];

export const data = {
    labels,
    datasets: [
        {
            label: "Design",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: ["#44b4e0"],
            borderColor: "white",
            borderWidth: 2,
            // minBarLength: 50,
        },
        {
            label: "Frontend",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: ["#ff9999"],
            borderColor: "white",
            borderWidth: 2,
            // minBarLength: 50,
        },
        {
            label: "Backend",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: ["grey"],
            borderColor: "white",
            borderWidth: 2,
            // minBarLength: 50,
        },
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
