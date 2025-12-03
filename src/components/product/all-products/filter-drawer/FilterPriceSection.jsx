const FilterPriceSection = ({
  minValue,
  maxValue,
  MIN,
  MAX,
  minPercent,
  maxPercent,
  setMinValue,
  setMaxValue
}) => {
  return (
    <div className="filter_section filter_section--half filter_section--price">
      <h3 className="filter_title text-sm">Price</h3>

      <div className="filter_price_inputs">
        <div className="filter_price_box">
          <h3 className="filter_price_label text-sm">Min</h3>
          <input
            type="text"
            value={minValue}
            placeholder="Rs.999"
            onChange={(e) =>
              setMinValue(Math.min(Number(e.target.value) || MIN, maxValue - 1))
            }
            className="filter_price_input text-xs"
          />
        </div>

        <div className="filter_price_box">
          <h3 className="filter_price_label text-sm">Max</h3>
          <input
            type="text"
            value={maxValue}
            placeholder="Rs.9,999"
            onChange={(e) =>
              setMaxValue(Math.max(Number(e.target.value) || MAX, minValue + 1))
            }
            className="filter_price_input text-xs"
          />
        </div>
      </div>

      {/* Slider */}
      <div className="slider_container">
        <div className="slider_track" />
        <div
          className="slider_range"
          style={{
            "--left": `${minPercent}%`,
            "--width": `${maxPercent - minPercent}%`
          }}
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - 1);
            setMinValue(val);
          }}
          className="slider_thumb"
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + 1);
            setMaxValue(val);
          }}
          className="slider_thumb"
        />
      </div>
    </div>
  );
};

export default FilterPriceSection;
