import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./linechart.module.css";

const LineChart = ({ history, price, name }) => {
  const coinPrice = [];
  const timeStamp = [];
  for (let i = 0; i < history?.data?.history.length; i++) {
    coinPrice.push(history.data.history[i].price);
    timeStamp.push(
      new Date(history?.data.history[i]?.timestamp).toLocaleDateString()
    );
  }
  console.log(history);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    resizeDelay: 0,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className={styles.row}>
        <h2>{name} Price Chart</h2>
        <div className={styles.details}>
          <span>{history?.data?.change}% </span>
          <span>{`Current ${name} Price: $ ${price}`}</span>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
