import { LineChartComp } from '@/Restaurant/components/LineChart'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp } from 'lucide-react'
const chartData = [
  { month: "Week 27", desktop: 3, mobile: 3 },
  { month: "Week 28", desktop: 9, mobile: 73 },
]

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
import { Line as LineChart1 } from "react-chartjs-2";

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

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#1AA6F1",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

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

const Overview = () => {
  return (
    <div>
      <h1 className='font-numans text-2xl font-semibold'>Sales Overview</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Sales & Orders"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Average Order Value"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Market Share"
          />
        </div>
      </div>

      <h1 className='font-numans text-2xl font-semibold mt-5'>User Experience</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Rated order & review"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Average Order Value"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Online Percentage & Offline time"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="For KPT & accuracy"
          />
        </div>
      </div>

      <h1 className='font-numans text-2xl font-semibold mt-5'>User Funnel</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Impressions"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Impressions to Menu"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Impressions"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="New users, Repeat users &  Lapsed users"
          />
        </div>
      </div>

      <h1 className='font-numans text-2xl font-semibold mt-5'>Marketing</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Total sales & Sales from promotion"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Order Percentage from Promotion"
          />
        </div>
        <div className='bg-white rounded-2xl p-4'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Impressions & Impressions from Promotions"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Promotion CTR"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Promotion spent & ROI"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Total sales & Gross Sales from Promotion"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Orders % & Effective Offers"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Net sales from discount & offers given"
          />
        </div>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="Effective discount"
          />
        </div>
      </div>

      <h1 className='font-numans text-2xl font-semibold mt-5'>Trending Menu</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='bg-white rounded-2xl p-4 h-full'>
          <LineChartComp
            chartData={data}
            chartOptions={options}
            title="M2C & Menu score"
          />
        </div>
      </div>
    </div>
  )
}

export default Overview