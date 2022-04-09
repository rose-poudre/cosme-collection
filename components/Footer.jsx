import Router from "next/router";
import Credit from "./Credit";

const handlClick = (categorySmall) => {
  Router.push({
    pathname: "/productlist",
    query: { categorySmall },
  });
};

const handlClickBig = (categoryBig) => {
  Router.push({
    pathname: "/productlist",
    query: { categoryBig },
  });
};

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 px-10 py-14 bg-gray-200">
        <div className="space-y-4 text-xs text-gray-800">
          <h5
            onClick={() => handlClickBig("スキンケア・基礎化粧品")}
            className="cursor-pointer hover:text-white font-bold hover:shadow-lg  hover:bg-gold-500 transform transition duration-300 ease-out"
          >
            スキンケア
          </h5>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("クレンジング")}
          >
            クレンジング
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("洗顔料")}
          >
            洗顔料
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("化粧水")}
          >
            化粧水
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("美容液")}
          >
            美容液
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("乳液")}
          >
            乳液
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5
            onClick={() => handlClickBig("日焼け対策")}
            className="cursor-pointer hover:text-white font-bold hover:shadow-lg  hover:bg-gold-500 transform transition duration-300 ease-out"
          >
            日焼け対策
          </h5>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("日焼け止め（顔用）")}
          >
            日焼け止め（顔用）
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("日焼け止め（体用）")}
          >
            日焼け止め（体用）
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5
            onClick={() => handlClickBig("ベースメイク")}
            className="cursor-pointer hover:text-white font-bold hover:shadow-lg  hover:bg-gold-500 transform transition duration-300 ease-out"
          >
            ベースメイク
          </h5>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("ファンデーション")}
          >
            ファンデーション
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("化粧下地")}
          >
            化粧下地
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("コンシーラー")}
          >
            コンシーラー
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("フェイスパウダー")}
          >
            フェイスパウダー
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5
            onClick={() => handlClickBig("メイクアップ")}
            className="cursor-pointer hover:text-white font-bold hover:shadow-lg  hover:bg-gold-500 transform transition duration-300 ease-out"
          >
            メイクアップ
          </h5>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("アイブロウ")}
          >
            アイブロウ
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("アイライナー")}
          >
            アイライナー
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("マスカラ")}
          >
            マスカラ
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("アイシャドウ")}
          >
            アイシャドウ
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("チーク")}
          >
            チーク
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("口紅・グロス")}
          >
            口紅・グロス
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5
            onClick={() => handlClickBig("香水・フレグランス")}
            className="cursor-pointer hover:text-white font-bold hover:shadow-lg  hover:bg-gold-500 transform transition duration-300 ease-out"
          >
            香水・フレグランス
          </h5>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("香水（レディース）")}
          >
            香水（レディース）
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("香水（メンズ）")}
          >
            香水（メンズ）
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("フレグランス（レディース）")}
          >
            フレグランス（レディース）
          </p>
          <p
            className="cursor-pointer hover:text-white hover:shadow-lg hover:bg-gold-500 transform transition duration-300 ease-out"
            onClick={() => handlClick("フレグランス（メンズ）")}
          >
            フレグランス（メンズ）
          </p>
        </div>
      </div>
      <Credit />
    </div>
  );
};

export default Footer;
