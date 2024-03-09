// const tableHeaders = ['№', 'price', 'amount', 'date'];

import style from './CryptoHistory.module.css';
import { dateFormat2 } from 'helpers/dateFormat';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{dateFormat2(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
