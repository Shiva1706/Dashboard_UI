import React, { useCallback, useState } from "react";
import {
  // ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Cell,
  Label,
} from "recharts";
const COLORS = ["#db2777", "#e4e4e7","#9333ea"];

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 350 },
  { name: "Group C", value: 450 },
];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius-6}
        outerRadius={outerRadius+4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const CustomersChart = () => {

  const [activeIndex, setActiveIndex ] = useState(null);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );


  return (
    <div className="h-[20rem] w-80 bg-white p-4 rounded-lg flex flex-col grow ">
      <div className="flex flex-col">
        <strong className="text-gray-700 font-medium">Customers</strong>
        <span className="text-gray-300 text-xs font-semibold">
          Customers that buy products
        </span>
      </div>

      <div className="w-4/5 ml-8 text-xs ">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <PieChart width={300}height={300} >
            <Pie

              activeIndex={activeIndex}
              activeShape={renderActiveShape} 


              data={data}
              cx='50%'
              cy='50%'
              dataKey='value'
              innerRadius={70}
              outerRadius={95}
              fill="#8884d8"
              paddingAngle={0}

              onMouseEnter={onPieEnter}
            >
              <Label
                value="65%"
                position="centerBottom"
                className="label-top font-bold "
                fontSize="27px"
                fill="#000"
                
              />
              <Label
                width={80}
                value="Total New Customers"
                position="centerTop"
                className="label font-semibold "
                fill="#000"
              />
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default CustomersChart;
