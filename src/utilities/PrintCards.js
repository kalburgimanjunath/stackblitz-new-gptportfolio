export default const PrintCards = ({ items }) => {
    return isEmpty(items) ? <Cards items={items} /> : 'empty items';
  };