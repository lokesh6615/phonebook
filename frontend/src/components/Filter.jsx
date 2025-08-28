const Filter = ({ setFilter }) => {
  return (
    <div>
      filter shown with
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default Filter;
