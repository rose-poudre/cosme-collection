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
    <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      <button className="button" onClick={() => handlClick("アクアレーベル")}>
        アクアレーベル
      </button>
      <button className="button" onClick={() => handlClick("エリクシール")}>
        エリクシール
      </button>
      <button className="button" onClick={() => handlClick("トゥベール")}>
        トゥベール
      </button>
    </div>
  );
}
export default ChooseBrand;
