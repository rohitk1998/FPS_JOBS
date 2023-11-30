export const RSelect = ({ label, option, setValue, error, setError }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-left">{label}</h2>
      <select
        className="bg-transparent rounded outline-none"
        style={{height:'44px'}}
        onChange={(e) => {
          setValue(e.target.value);
          setError('');
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
      <p className="p-1 font-semibold text-red-700">{error && error}</p>
    </div>
  );
};
