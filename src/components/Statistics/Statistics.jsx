import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const arrIcons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>];
export const Statistics = ({ title, dataStats }) => {
  return (
    <>
    {title&&<h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {dataStats.map((dataStat, index) => {
          return <StatisticsItem dataStat={dataStat} key={dataStat.id} 
           icon={arrIcons[index]}
          />
        })}
      </ul>
    </>
  );
};
