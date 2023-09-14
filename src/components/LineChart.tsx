import { useAppSelector } from '../app/hooks';
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
import millify from 'millify';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ( {name, price}: {name: string, price: string} ) => {
  const { history } = useAppSelector((state) => state.coins);  
  const labels = history?.history?.map((history) => new Date(history.timestamp * 1000 ).toLocaleDateString());
  const data = {
    labels,
    datasets: [
      {
        label: 'Price in USD',
        data: history?.history?.map((history) => history.price),
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
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
        text: `${name} Line Chart`,
      },
    },
  };

  return (
    <div className='w-full md:min-h-[500px] mt-5'>
      <section className='flex flex-col md:flex-row md:justify-between gap-4 md:items-center'>
        <h2 className='text-3xl capitalize font-bold text-blue-500'>{name} Price chart</h2>
        <div className='flex  gap-4'>
          <p className='font-bold text-xl'>{history?.change}%</p>
          <p className='font-bold text-xl capitalize'>current {name} price: ${millify(+price)}</p>
        </div>
      </section>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart