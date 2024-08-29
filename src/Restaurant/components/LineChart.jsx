import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
    PointElement,
    LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    LineElement
);

const options = {
    // borderRadius: 30, // Adjust this value as needed
    // scales: {
    //     yAxes: [{
    //         ticks: {
    //             beginAtZero: true
    //         }
    //     }]
    // }
    plugins: {
        tooltip: {
            // position: 'nearest',
            // callbacks: {
            //   label: function (tooltipItem) {
            //     return `Value: ${tooltipItem.raw}`;
            //   },
            // },
            position: function (context) {
                const chart = context.chart;
                const { x, y } = context.tooltip.caretX && context.tooltip.caretY
                    ? { x: context.tooltip.caretX, y: context.tooltip.caretY }
                    : chart.getDatasetMeta(0).data[context.tooltip.dataPoints[0].index].getCenterPoint();
                return { x: x - context.tooltip.width - 10, y };
            },
        },
    },
};

const data = {
    labels: [
        'Week 27',
        'Week 28',
    ],
    fontColor: "white",
    datasets: [
        {
            label: "Impressions",
            data: [2, 5],
            backgroundColor: ["#1AA6F1"],
            borderColor: ["#1AA6F1"],
            borderWidth: 2,
        },
    ],
};

export function LineChartComp({ title, chartData, chartOptions }) {
    return (
        <div>
            <p className="class-base3">{title}</p>
            <Line data={chartData} options={chartOptions} />
        </div>
    )
}
