
const FilterHeader = ({ closePanel, clearFilter }) => {
    return (
        <div className="filter_header">
            <div className="filter_title_row">
                <h3 className="text-sm">Filters ( 1 )</h3>
                <p onClick={clearFilter} className="text-xs">Clear Filters</p>
            </div>

            <button onClick={closePanel}>
                <h3 className="text-sm">Close</h3>
            </button>
        </div>
    );
};

export default FilterHeader;
