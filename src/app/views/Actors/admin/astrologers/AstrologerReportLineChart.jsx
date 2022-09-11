import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import { load_reg_al} from "../../../../services/Admin/Astrologer/admin_astrologer_report_service";
import {useEffect, useState} from "react";


const AstrologerReportLineChart = ({ height, color = [] ,sDate,eDate}) => {
  const theme = useTheme();
  console.log("line chart"+sDate)
  console.log("line chart"+eDate)
  const [RegAl, setRegAl] = useState([[]]);

  //load registered astrolergers
  useEffect(() => {
    load_reg_al(sDate,eDate).then(data => {
      console.log(data)
      setRegAl(data);
    console.log(RegAl['reg_al'][0]['month(registered_at)']);
    console.log(RegAl['reg_al'][0]['count(*)']);
    })
  }, [])

console.log(RegAl)
 let al=[];
let i=0;
  RegAl.map((al_count:array)=> (
      al[i]=al_count['count(*)'],
      i++

));
  console.log(al[0]);
 // console.log(al[1]);

  const option = {
    grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
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
        data: [30, 40, 20, 50, 40, 80, 90,30, 40, 20, 50, 40,],
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
