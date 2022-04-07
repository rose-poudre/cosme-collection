import Router from "next/router";

const handlClick = (activeIngredientName) => {
  Router.push({
    pathname: "/productlist",
    query: { activeIngredientName },
  });
};
console.log(handlClick);

function ChooseActiveIngredientName() {
  return (
    <div className="text-wrap inline-flex mb-5 space-x-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">
      <button
        className="button keyword-button"
        onClick={() => handlClick("アルブチン")}
      >
        アルブチン
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("ビタミンC誘導体")}
      >
        ビタミンC誘導体
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("カモミラET")}
      >
        カモミラET
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("ハイドロキノン")}
      >
        ハイドロキノン
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("トラネキサム酸")}
      >
        トラネキサム酸
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("プラセンタエキス")}
      >
        プラセンタエキス
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("コウジ酸")}
      >
        コウジ酸
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("リノール酸S")}
      >
        リノール酸S
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("ニコチン酸アミド")}
      >
        ニコチン酸アミド
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("4MSK")}
      >
        4MSK
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("ニコチン酸アミド")}
      >
        マグノリグナン
      </button>
      <button
        className="button keyword-button"
        onClick={() => handlClick("エナジーシグナルAMP")}
      >
        エナジーシグナルAMP
      </button>
    </div>
  );
}
export default ChooseActiveIngredientName;
