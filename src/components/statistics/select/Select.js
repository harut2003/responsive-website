import "./Select.scss";

function Select({ options, width, fontSize }) {
  return (
    <div
      className="select_box"
      style={{
        width: `${width || 100}px`,
      }}
    >
      <select
        className="select"
        style={{
          width: `${width + "px" || "inherit"}`,
          fontSize: `${fontSize + "px" || "inherit"}`,
        }}
      >
        {!options ? (
          <>
            <option>Last week</option>
            <option>Last month</option>
            <option>Last year</option>
          </>
        ) : (
          options.map((option, i) => <option key={i}>{option}</option>)
        )}
      </select>
    </div>
  );
}

export default Select;
