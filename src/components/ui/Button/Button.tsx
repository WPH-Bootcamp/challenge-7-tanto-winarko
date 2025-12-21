type ButtonProps = {
  name: string;
  label: string;
  width?: string;
  onClickDesc?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      id={`${props.name}`}
      className={`${
        props.width != null ? "w-full" : "w-[197px]"
      } h-11 rounded-full cursor-pointer bg-[#FF623E] text-white font-bold text-sm items-center text-center`}
      type="button"
      onClick={() => {
        location.href = `#${props.name}`;
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
