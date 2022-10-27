import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import { load_reg_al} from "../../../../services/Admin/Astrologer/admin_astrologer_report_service";
import {useEffect, useState} from "react";
import {array} from "yup";


const AstrologerReportLineChart = ({ height, color = [] ,sDate,eDate}) => {

 // console.log("line chart"+sDate)
  //console.log("line chart"+eDate)
  let al_month=[];
  let al_count=[];
  const [AlMonth, setAlMonth] = useState([]);
  const [AlCount, setAlCount] = useState([]);

  const theme = useTheme();

  const [RegAl, setRegAl] = useState([[]]);

  useEffect(() => {
    load_reg_al(sDate,eDate).then(data => {

      setRegAl(data);
     // console.log(RegAl)
    }).catch(err => {
      console.log(err.error)
    })
  }, [],sDate,eDate);

  useEffect(async () => {

    if(RegAl.reg_al){
    console.log(RegAl)
      al_count=RegAl.reg_al.map((al_count:array)=> al_count['count(*)']);
      al_month=RegAl.reg_al.map((al_month:array)=> al_month['month(registered_at)']);
      setAlCount(al_count)
      setAlMonth(al_month)
      //console.log(al_count)
    }
  }, [RegAl]);




 /*useEffect(()=>{
   setAlCount(al_count)
 },[])


  useEffect(()=>{
    al_month?setAlMonth(al_month)
   // console.log(AlMonth)
  },[])*/


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
        xLabel:'month',
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

export default AstrologerReportLineChart;

export class refresh {
}