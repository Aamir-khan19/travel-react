const FileUploadField = ({ label, name, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            type="file"
            name={name}
            onChange={onChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
    </div>
);

export default FileUploadField;