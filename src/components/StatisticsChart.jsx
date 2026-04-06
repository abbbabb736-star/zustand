import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import './StatisticsChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: { boxWidth: 12, font: { size: 11 } },
    },
  },
}

export default function StatisticsChart() {
  const lineData = {
    labels: ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Yak'],
    datasets: [
      {
        label: 'Tashriflar',
        data: [65, 59, 80, 81, 56, 55, 90],
        borderColor: 'rgb(17, 24, 39)',
        backgroundColor: 'rgba(17, 24, 39, 0.08)',
        fill: true,
        tension: 0.35,
      },
    ],
  }

  const barData = {
    labels: ['Air Max', 'Jordan', 'Running', 'Lifestyle'],
    datasets: [
      {
        label: 'Sotuv (ming $)',
        data: [42, 58, 33, 47],
        backgroundColor: ['#111827', '#374151', '#6b7280', '#9ca3af'],
        borderRadius: 8,
      },
    ],
  }

  const doughnutData = {
    labels: ['Erkak', 'Ayol', 'Bola'],
    datasets: [
      {
        data: [45, 38, 17],
        backgroundColor: ['#111827', '#4b5563', '#d1d5db'],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className="statistics-charts">
      <div className="statistics-charts__card">
        <h3 className="statistics-charts__title">Haftalik dinamika</h3>
        <div className="statistics-charts__canvas statistics-charts__canvas--line">
          <Line
            data={lineData}
            options={{
              ...baseOptions,
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
                x: { grid: { display: false } },
              },
            }}
          />
        </div>
      </div>
      <div className="statistics-charts__card">
        <h3 className="statistics-charts__title">Kategoriya bo‘yicha</h3>
        <div className="statistics-charts__canvas statistics-charts__canvas--bar">
          <Bar
            data={barData}
            options={{
              ...baseOptions,
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
                x: { grid: { display: false } },
              },
            }}
          />
        </div>
      </div>
      <div className="statistics-charts__card">
        <h3 className="statistics-charts__title">Mijozlar ulushi</h3>
        <div className="statistics-charts__canvas statistics-charts__canvas--doughnut">
          <Doughnut
            data={doughnutData}
            options={{
              ...baseOptions,
              cutout: '58%',
              plugins: {
                ...baseOptions.plugins,
                legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
