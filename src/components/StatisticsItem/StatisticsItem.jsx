import styled from "./Statistics.module.css"
import { IconContext } from "react-icons";


export const StatisticsItem = ({dataStat, icon}) => {
  return (
    <li className={styled.item}>
<IconContext.Provider value={{ size: "2em" }}>{icon}</IconContext.Provider>
<span className={styled.counter}>{dataStat.total}</span>
<p className={styled.text}>{dataStat.title}</p>
</li>
  
  )
};
