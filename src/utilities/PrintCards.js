export default function PrintCards({ items }){
    return isEmpty(items) ? <Cards items={items} /> : 'empty items';
  };