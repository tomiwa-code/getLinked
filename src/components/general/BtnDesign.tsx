const BtnDesign = (props: { text: string; register: boolean }) => {
  return (
    <button className="w-[145px] flex justify-center items-center h-14 text-center text-white rounded-md py-3 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-gradient-to-r hover:from-[#903AFF] hover:to-[#FE34B9] duration-700 cursor-pointer">
      <div
        className={`${
          props.register
            ? "h-12 w-[139px] flex items-center justify-center rounded-md bg-dark"
            : ""
        }`}
      >
        {props.text}
      </div>
    </button>
  );
};

export default BtnDesign;
