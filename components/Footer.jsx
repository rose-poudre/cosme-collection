const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-y-10 px-10 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">スキンケア・基礎化粧品</h5>
        <p>クレンジング</p>
        <p>洗顔料</p>
        <p>化粧水</p>
        <p>美容液</p>
        <p>乳液</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">日焼け対策</h5>
        <p>日焼け止め（顔用）</p>
        <p>日焼け止め（体用）</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ベースメイク</h5>
        <p>ファンデーション</p>
        <p>化粧下地</p>
        <p>コンシーラー</p>
        <p>フェイスパウダー</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">メイクアップ</h5>
        <p>アイブロウ</p>
        <p>アイライナー</p>
        <p>マスカラ</p>
        <p>アイシャドウ</p>
        <p>チーク</p>
        <p>口紅・グロス</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">香水・フレグランス</h5>
        <p>香水（レディース）</p>
        <p>香水（メンズ）</p>
        <p>フレグランス（レディース）</p>
        <p>フレグランス（メンズ）</p>
      </div>
    </div>
  );
};

export default Footer;
