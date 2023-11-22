export const RSelect = ({ label, option, setValue, error, setError }) => {
  return (
    <div className="flex flex-col h-20 gap-2">
      <h2 className="font-semibold text-left">{label}</h2>
      <select
        className="p-2 bg-transparent rounded outline-none"
        style={{ border: "2px solid lightgray" }}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
      >
        <option value={''}>
          <p className="text-gray-300">Select Your {label}</p>
        </option>

        {option.length > 0 &&
          option.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <p className="p-1 font-semibold text-red-600">{error && error}</p>
    </div>
  );
};
