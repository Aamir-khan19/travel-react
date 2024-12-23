const InputField = ({ label, name, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
    </div>
);

export default InputField;