import imgHeader from "../../assets/imgi_1_wraper.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={imgHeader} alt="" className="w-full object-cover h-60" />
      </header>
    </>
  );
}
