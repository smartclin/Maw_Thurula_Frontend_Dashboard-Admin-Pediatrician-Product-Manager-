import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import {load_profit_al, load_reg_al} from "../../../../services/Admin/Astrologer/admin_astrologer_report_service";
import {useEffect, useState} from "react";
import {array} from "yup";


const AstrologerReportLineChart2 = ({ height, color = [] ,sDate,eDate}) => {
  const theme = useTheme();
  console.log("line chart"+sDate)
  console.log("line chart"+eDate)
  const [RegAl, setRegAl] = useState([[]]);

  //load profit from astrolergers

    let al_month=[];
    let al_count=[];
    const [AlMonth, setAlMonth] = useState([]);
    const [AlCount, setAlCount] = useState([]);
    useEffect(() => {
        load_profit_al(sDate,eDate).then(data => {
            setRegAl(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, [RegAl]);

    useEffect(async () => {

        if(RegAl.profit_al){
            console.log(RegAl.profit_al)
            al_count=RegAl.profit_al.map((al_count:array)=> al_count['SUM(amount)']);
            al_month=RegAl.profit_al.map((al_month:array)=> al_month['month(date_time)']);
            setAlCount(al_count)
            setAlMonth(al_month)
        }
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
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' },
    },
    series: [
      {
        data: AlCount,
        type: 'line',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 },
      },

    ],
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default AstrologerReportLineChart2;
