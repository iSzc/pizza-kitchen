function ButtonHeader(props) {
  const { onClick } = props;

  return (
    <div>
      <button
        className={`text-[#535456] text-base flex z-[4] font-[#717171] hover:text-orange-500 font-Overpass font-semibold ${props.btnChangeTheme}`}
        onClick={onClick}
      >
        {props.btn}
      </button>
    </div>
  );
}

export default ButtonHeader;
