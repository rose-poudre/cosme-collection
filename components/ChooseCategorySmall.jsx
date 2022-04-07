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
    <div className="text-wrap inline-flex mb-5 space-x-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">
      <button
        className="button keyword-button"
        onClick={() => handlClick("化粧水")}
      >
        化粧水
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("乳液")}
      >
        乳液
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("美容液")}
      >
        美容液
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("クレンジング")}
      >
        クレンジング
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("洗顔フォーム")}
      >
        洗顔フォーム
      </button>
    </div>
  );
}
export default ChooseCategorySmall;
