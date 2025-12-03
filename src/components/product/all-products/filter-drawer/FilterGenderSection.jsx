const FilterGenderSection = ({ genders, selectedGenders, setSelectedGenders }) => {

  const toggleGender = (label) => {
    setSelectedGenders((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)  // remove
        : [...prev, label]                       // add
    );
  };

  return (
    <div className="filter_section filter_section--half">
      <h3 className="filter_title text-sm">Gender</h3>

      <div className="filter_btn_group">
        {genders.map((label, idx) => (
          <button
            key={idx}
            onClick={() => toggleGender(label)}
            className={`filter_btn ${
              selectedGenders.includes(label) ? "filter_btn--active" : ""
            }`}
          >
            <p className="text-xs">{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterGenderSection;
