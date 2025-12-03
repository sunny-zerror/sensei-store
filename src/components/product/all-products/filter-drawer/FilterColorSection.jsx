const FilterColorSection = ({ colors, selectedColors, setSelectedColors }) => {

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)   // remove
        : [...prev, color]                  // add
    );
  };

  return (
    <div className="filter_section">
      <h3 className="filter_title text-sm">Colors</h3>

      <div className="filter_color_grid">
        {colors.map((color, idx) => (
          <button
            key={idx}
            onClick={() => toggleColor(color)}
            className={`filter_color_item ${
              selectedColors.includes(color) ? "filter_color_item--active" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterColorSection;
