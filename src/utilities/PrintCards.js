import { isEmpty } from "./helper";
import { Cards } from "../components";
export default function PrintCards({ items }){
    return isEmpty(items) ? <Cards items={items} /> : 'Empty items';
  };