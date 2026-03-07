import Input from "./Input";

function InputForm({ onChange, value, label, placeholder }) {
  return (
    <div>
      <div>{label}</div>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default InputForm;
