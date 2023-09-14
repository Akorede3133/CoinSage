import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getHistory } from '../features/coins/coinsSlice';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({id, period}) => {
  const dispatch = useAppDispatch();
  const { history } = useAppSelector((state) => state.coins);
  const labels = history.map((history) => history.timestamp);
  const data = {
    labels,
    datasets: [
      {
        label: 'Price in USD',
        data: history.map((history) => history.price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  useEffect(() => {
    dispatch(getHistory({id: 'Qwsogvtv82FCd', period: '24h'}));
  }, [dispatch])
  return (
    <div className='w-full md:h-[500px]'>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart