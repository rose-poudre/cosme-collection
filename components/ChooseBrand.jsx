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
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 text-gray-800 whitespace-nowrap">
      <button className="button" onClick={() => handlClick("アクアレーベル")}>
        アクアレーベル
      </button>
      <button className="button" onClick={() => handlClick("エリクシール")}>
        エリクシール
      </button>
      <button className="button" onClick={() => handlClick("トゥベール")}>
        トゥベール
      </button>
      <button className="button" onClick={() => handlClick("プラスリストア")}>
        プラスリストア
      </button>
      <button className="button" onClick={() => handlClick("オンリーミネラル")}>
        オンリーミネラル
      </button>
    </div>
  );
}
export default ChooseBrand;
