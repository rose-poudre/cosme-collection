import { useRouter } from "next/router";

const Credit = () => {
  const router = useRouter();
  return (
    <div>
      <div className="credit bg-gray-900 text-white text-xs py-2">
        <div className="grid grid-col-1 text-center font-thin sm:flex sm:justify-around">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            Copyright - Cosmetics collection, 2022 All Rights Reserved.
          </div>
          <div
            className="text-gold-200 cursor-pointer"
            onClick={() => router.push("/privacy")}
          >
            プライバシーポリシー
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
