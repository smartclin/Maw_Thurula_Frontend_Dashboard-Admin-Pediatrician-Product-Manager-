import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import {useEffect, useRef, useState} from "react";
import {array} from "yup";
import {load_profit_al} from "../../../services/Admin/Astrologer/admin_astrologer_report_service";

const LineChart = ({ height, color = [] }) => {
  const theme = useTheme();
  let al_month=[];
  let al_count=[];
  const [RegAl, setRegAl] = useState([]);

  const [AlMonth, setAlMonth] = useState([]);
  const [AlCount, setAlCount] = useState([]);
  const [Count, setCount] = useState([0, 0, 0, 0, 0, 0, 0,0, 0, 0]);
  var ProfitArray=[0, 0, 0, 0, 0, 0, 0,0, 0, 0]
  var eDate = new Date(new Date().getFullYear(), 11, 31);
  var sDate = new Date(new Date().getFullYear(), 0, 1);
  useEffect(() => {
    load_profit_al(sDate,eDate).then(data => {
      setRegAl(data.profit_al);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);


  useEffect(async () => {
    console.log(RegAl)
    if(RegAl){
      // console.log(RegAl.profit_al)
      al_count=RegAl.map((al_count:array)=> al_count['SUM(amount)']);
      al_month=RegAl.map((al_month:array)=> al_month['month(date_time)']);
      console.log("al_count",al_count)
      console.log("al_month",al_month)
      setAlCount(al_count)
      setAlMonth(al_month)
      for(let i=0;i<12;i++){
        if(al_month[i]){
          ProfitArray[ al_month[i]]=al_count[i]
          console.log("month ", al_month[i], "profit",al_count[i])
        }
      }
      setCount(ProfitArray)
    }
  }, [RegAl]);

  const option = {
    grid: { top: '10%', bottom: '10%', left: '14%', right: '5%' },
    legend: {
      itemGap: 20,
      icon: 'circle',
      textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' },
    },
    xAxis: {
      type: 'category',
      data: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
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
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' },
    },

    series: [
      {
        data: Count,
        type: 'line',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 },
      },

    ],
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default LineChart;
