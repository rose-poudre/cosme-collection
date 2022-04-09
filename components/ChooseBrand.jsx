import Router from "next/router";

const handlClick = (brand) => {
  Router.push({
    pathname: "/productlist",
    query: { brand },
  });
};
// console.log(handlClick);

function ChooseBrand() {
  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 text-xs md:text-sm  text-gray-800 whitespace-nowrap">
      <button
        className="button hover:scale-105 transform transition duration-300 ease-out"
        onClick={() => handlClick("アクアレーベル")}
      >
        アクアレーベル
      </button>
      <button
        className="button hover:scale-105 transform transition duration-300 ease-out"
        onClick={() => handlClick("エリクシール")}
      >
        エリクシール
      </button>
      <button
        className="button hover:scale-105 transform transition duration-300 ease-out"
        onClick={() => handlClick("トゥベール")}
      >
        トゥベール
      </button>
      <button
        className="button hover:scale-105 transform transition duration-300 ease-out"
        onClick={() => handlClick("プラスリストア")}
      >
        プラスリストア
      </button>
      <button
        className="button hover:scale-105 transform transition duration-300 ease-out"
        onClick={() => handlClick("オンリーミネラル")}
      >
        オンリーミネラル
      </button>
    </div>
  );
}
export default ChooseBrand;
