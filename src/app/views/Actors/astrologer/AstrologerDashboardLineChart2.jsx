import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import {useEffect, useState} from "react";
import {array} from "yup";
import {load_line_chart2} from "../../../services/Astrologer/al_dashboard_service";


const AstrologerDashboardLineChart2 = ({ height, color = []}) => {
  const theme = useTheme();
  let u_id=localStorage.getItem("id");
  const [RegAl, setRegAl] = useState([[]]);

  //load profit from astrolergers

    let al_month=[];
    let al_count=[];
    const [AlMonth, setAlMonth] = useState([]);
    const [AlCount, setAlCount] = useState([]);
    useEffect(() => {
        load_line_chart2(u_id).then(data => {
            setRegAl(data);
           // console.log(RegAl)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {

        if(RegAl.profit_data){
            console.log(RegAl.profit_data)
            al_count=RegAl.profit_data.map((al_count:array)=> al_count['sum(amount)']);
            al_month=RegAl.profit_data.map((al_month:array)=> al_month['month(date_time)']);
            setAlCount(al_count)
            setAlMonth(al_month)
        }
    }, [RegAl]);


  const option = {
    grid: { top: '10%', bottom: '10%', left: '12%', right: '5%' },
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

export default AstrologerDashboardLineChart2;
