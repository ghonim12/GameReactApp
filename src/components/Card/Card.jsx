export default function Card(props) {
  let { genre, platform, title, short_description, thumbnail } = props.gameItem;
  return (
    <>
      <div
        onClick={props.onClick}
        className="bg-primary duration-500 hover:scale-110 my-1 cursor-pointer"
      >
        <div className="w-full max-w-sm border rounded-lg shadow-sm border-[#202328]">
          <div>
            <img className="rounded-t-lg" src={thumbnail} alt="game image" />
          </div>
          <div className="flex justify-between items-center p-4">
            <p className="font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </p>
            <p className=" py-1 px-2 rounded-xl  font-semibold tracking-tight text-gray-900 dark:text-white bg-[#4A6792] hover:bg-blue-600 ">
              free
            </p>
          </div>
          <div className=" text-gray-500 text-center">
            <p>{short_description.slice(1, 60)}</p>
          </div>
          <div className="flex items-center justify-between border border-[#202328] p-3">
            <p className="bg-[#32383E] text-sm font-bold text-gray-900 dark:text-white rounded-lg px-2 py-1">
              {genre}
            </p>
            <p className="text-white bg-[#32383E] font-medium rounded-lg text-[12px] px-2 py-1 text-center">
              {platform}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
