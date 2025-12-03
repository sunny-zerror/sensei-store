const FilterSizeSection = ({ sizes, selectedSizes, setSelectedSizes }) => {
  
  const toggleSize = (label) => {
    setSelectedSizes((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label) // remove from selection
        : [...prev, label] // add to selection
    );
  };

  return (
    <div className="filter_section">
      <h3 className="filter_title text-sm">Size</h3>

      <div className="filter_size_grid">
        {sizes.map((label, idx) => (
          <div
            key={idx}
            onClick={() => toggleSize(label)}
            className={`filter_size_item ${
              selectedSizes.includes(label) ? "filter_size_item--active" : ""
            }`}
          >
            <p className="text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSizeSection;
