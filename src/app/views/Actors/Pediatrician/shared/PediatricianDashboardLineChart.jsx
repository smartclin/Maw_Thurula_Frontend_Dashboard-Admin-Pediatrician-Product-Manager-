import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import {useEffect, useState} from "react";
import {load_line_chart1} from "../../../../services/NameProvider/np_dashboard_service";
import {array} from "yup";
import {load_line_chart_for_pd} from "../../../../services/Pediatrician/pt_service";

const PediatricianDashboardLineChart = ({ height, color = [] }) => {
  const theme = useTheme();
  const [RegAl, setRegAl] = useState([[]]);

  //load profit from astrolergers

  let al_month=[];
  let al_count=[];
  const [AlMonth, setAlMonth] = useState([]);
  const [AlCount, setAlCount] = useState([]);
  useEffect(() => {
    load_line_chart_for_pd(1).then(data => {
      setRegAl(data.catogery);
      //console.log("data",data.catogery)

    }).catch(err => {
      console.log(err.error)
    })
  }, []);
  useEffect(async () => {
    if(RegAl){
      al_count=RegAl.map((al_count:array)=> al_count['count(*)']);
      al_month=RegAl.map((al_month:array)=> al_month['month(followed_date)']);
      setAlMonth(al_month);
      setAlCount(al_count)

    }
    console.log("al minth2")
    console.log(al_count)
  }, [RegAl]);


  const option = {
    grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
    legend: {
      itemGap: 20,
      icon: 'circle',
      textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' },
    },
    xAxis: {
      type: 'category',
      data: AlMonth,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 },
      },
      axisLabel: { color: theme.palette.text.secondary, fontSize: 9, fontFamily: 'roboto' },
    },
    series: [
      {
        data: AlCount,
        type: 'line',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4},
      },

    ],
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default PediatricianDashboardLineChart;
