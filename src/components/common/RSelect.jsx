export const RSelect = ({ label, option, setValue, error, setError }) => {
  return (
    <div className="flex flex-col gap-2 h-20">
      <h2 className="text-left font-semibold">{label}</h2>
      <select
        className="p-2  outline-none rounded bg-transparent"
        style={{ border: "2px solid lightgray" }}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
      >
        <option disabled selected>
          Select Your Option
        </option>

        {option.length > 0 &&
          option.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
