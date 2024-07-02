import React, { useContext } from "react";
import Icon from "../../images/icon-02.svg";
import EditMenu from "../../components/DropdownEditMenu";
import { usePostContext } from "../../providers/PostContext";

function DashboardCard02() {
  const { postMostView } = usePostContext();
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex"></EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Numero de Vizualizações
        </h2>
        {/* <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{postMostView}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-14%</div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
    </div>
  );
}

export default DashboardCard02;
