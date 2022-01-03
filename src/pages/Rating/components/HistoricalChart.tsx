import React from 'react';
import { Line } from 'react-chartjs-2';

export const HistoricalChart: React.FC = () => {
  const data = {
    labels: ['2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Performance Rating',
        lineTension: 0.5,
        data: [48.1, 45.9, 55.3, 77.7],
        borderColor: '#2f87fc',
        backgroundColor: '#9ac9f8',
      },
      {
        label: 'Academic Growth',
        lineTension: 0.5,
        data: [55.8, 56.8, 70.2, 96.2],
        borderColor: '#d73f78',
        backgroundColor: '#edc8d9',
      },
      {
        label: 'Academic Achievement',
        lineTension: 0.5,
        data: [36.4, 29.6, 32.9, 50.5],
        borderColor: '#474797',
        backgroundColor: '#8a8eca',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <>
      <Line
        data={data}
        options={options}
      />
    </>
  )
}