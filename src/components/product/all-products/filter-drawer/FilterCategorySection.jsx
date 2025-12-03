const FilterCategorySection = ({ categories, selectedCategories, setSelectedCategories }) => {

  const toggleCategory = (label) => {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label) // remove
        : [...prev, label] // add
    );
  };

  return (
    <div className="filter_section">
      <h3 className="filter_title text-sm">Categories</h3>

      <div className="filter_btn_group">
        {categories.map((label, idx) => (
          <button
            key={idx}
            onClick={() => toggleCategory(label)}
            className={`filter_btn ${
              selectedCategories.includes(label) ? "filter_btn--active" : ""
            }`}
          >
            <p className="text-xs">{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategorySection;
