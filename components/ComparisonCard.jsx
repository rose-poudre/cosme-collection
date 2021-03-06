import React from "react";
import Image from "next/image";
import Router from "next/router";

const handlClick = (
  img,
  product,
  categorySmall,
  activeIngredientName,
  brand
) => {
  Router.push({
    pathname: "/productdetail",
    query: {
      img: img,
      product: product,
      categorySmall: categorySmall,
      activeIngredientName: activeIngredientName,
      brand: brand,
    },
  });
};

const ComparisonCard = ({ products }) => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-style table-auto w-full">
                  <thead>
                    <tr className="bg-primary md:text-base text-left md:text-center">
                      <th>商品画像</th>
                      <th>商品名</th>
                      <th>カテゴリ</th>
                      <th>有効成分</th>
                      <th>ブランド</th>
                      <th>販売元</th>
                      <th>商品リンク</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(
                      (
                        {
                          img,
                          product,
                          categorySmall,
                          activeIngredientName,
                          brand,
                          manufacture,
                        },
                        index
                      ) => (
                        <tr key={index}>
                          <td className="tdBgWhite">
                            <div className="bg-contain bg-center relative h-10 p-0 md:p-10 mr-0 md:mr-10 ml-0 md:ml-10 flex-shrink-0">
                              <Image
                                onClick={() =>
                                  handlClick(
                                    img,
                                    product,
                                    categorySmall,
                                    activeIngredientName,
                                    brand,
                                    manufacture
                                  )
                                }
                                src={img}
                                layout="fill"
                                // objectFit="cover"
                                objectfit="contain"
                                className="rounded-xl object-contain"
                              />
                            </div>
                          </td>
                          <td className="tdBgGray">
                            <div className="tb-text-wrap">{product}</div>
                          </td>
                          <td className="tdBgWhite">
                            <div className="tb-text-wrap">{categorySmall}</div>
                          </td>
                          <td className="tdBgGray">
                            <div className="tb-text-wrap">
                              {activeIngredientName}
                            </div>
                          </td>
                          <td className="tdBgWhite">
                            <div className="tb-text-wrap">{brand}</div>
                          </td>
                          <td className="tdBgGray">
                            <div className="tb-text-wrap">{manufacture}</div>
                          </td>

                          <td className="tdBgWhite">
                            <div
                              onClick={() =>
                                handlClick(
                                  img,
                                  product,
                                  categorySmall,
                                  activeIngredientName,
                                  brand,
                                  manufacture
                                )
                              }
                              className="tdBgGray overflow-y-auto py-1 md:py-2 inline-block
																	rounded
                                  bg-gold-600
                                  text-white
																	hover:bg-gold-500"
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

export default ComparisonCard;
