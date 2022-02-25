/* eslint-disable react/display-name */
import ReactApexChart from 'react-apexcharts'
import { useMemo, memo } from 'react'
import pl from 'apexcharts/dist/locales/pl.json'

const PMChart = memo(({ data }) => {
  const series = useMemo(
    () =>
      data?.map(({ name, measurements }) => ({
        name,
        data: measurements.map(({ date, value }) => ({ x: date, y: value })),
      })),
    [data],
  )

  const options = useMemo(
    () => ({
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        stackType: 'normal',
        locales: [pl],
        defaultLocale: 'pl',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        fontFamily: 'Poppins, sans-serif',
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        x: {
          show: true,
          format: 'dd MMM HH:mm',
          formatter: undefined,
        },
        y: {
          formatter: function (value) {
            return `${value} μg/m3`
          },
        },
      },
      colors: ['#fcba03', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      yaxis: { show: false },
    }),
    [data],
  )

  return (
    <div id="pmchart">
      <ReactApexChart type="area" options={options} series={series} />
    </div>
  )
})

export default PMChart
