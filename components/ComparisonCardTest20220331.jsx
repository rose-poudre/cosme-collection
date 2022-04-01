import React from "react";
import Image from "next/image";
import Router from "next/router";

const handlClick = (img) => {
  Router.push({
    pathname: "/productdetail",
    query: { img },
  });
};

// どこをループさせないといけないのか？
// コンポーネントの中に配列を渡してループさせないといけない
// useStateでアコーディオン

const ComparisonCardTest20220331 = ({
  products,
  // img,
  // manufacture,
  // brand,
  // product,
  // categorySmall,
}) => {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-primary text-center">
                      <th>画像</th>
                      <th>メーカー</th>
                      <th>ブランド</th>
                      <th>商品名</th>
                      <th>カテゴリ</th>
                      <th>有効成分</th>
                      <th>商品リンク</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(
                      ({
                        img,
                        manufacture,
                        brand,
                        product,
                        categorySmall,
                        activeIngredientName,
                      }) => (
                        <tr onClick={() => handlClick(img)}>
                          <td className="tdBgWhite">
                            <div className="bg-contain bg-center relative h-10 p-10 mr-10 ml-10 flex-shrink-0">
                              <Image
                                src={img}
                                layout="fill"
                                // objectFit="cover"
                                objectfit="contain"
                                className="rounded-xl object-contain"
                              />
                            </div>
                          </td>
                          <td className="tdBgGray">{manufacture}</td>
                          <td className="tdBgWhite">{brand}</td>
                          <td className="tdBgGray">{product}</td>
                          <td className="tdBgWhite">{categorySmall}</td>
                          <td className="tdBgWhite">{activeIngredientName}</td>
                          <td className="tdBgGray">
                            <div
                              onClick={() => handlClick(img)}
                              className="tdBgGray py-2 inline-block
																	rounded
                                  bg-yellow-600
                                  text-white
																	hover:bg-yellow-500
"
                            >
                              商品詳細ページへ
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonCardTest20220331;
