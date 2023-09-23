const BtnDesign = (props: { text: string }) => {
  return (
    <div className="w-[145px] text-center text-white rounded-md py-3 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-gradient-to-r hover:from-[#903AFF] hover:to-[#FE34B9] duration-700 cursor-pointer">
      {props.text}
    </div>
  );
};

export default BtnDesign;
