import Router from "next/router";

const handlClick = (categorySmall) => {
  Router.push({
    pathname: "/productlist",
    query: { categorySmall },
  });
};
console.log(handlClick);

function ChooseCategorySmall() {
  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 text-gray-800 whitespace-nowrap">
      <button className="button" onClick={() => handlClick("化粧水")}>
        化粧水
      </button>
      <button className="button" onClick={() => handlClick("乳液")}>
        乳液
      </button>
      <button className="button" onClick={() => handlClick("美容液")}>
        美容液
      </button>
      <button className="button" onClick={() => handlClick("クレンジング")}>
        クレンジング
      </button>
      <button className="button" onClick={() => handlClick("洗顔フォーム")}>
        洗顔フォーム
      </button>
    </div>
  );
}
export default ChooseCategorySmall;
