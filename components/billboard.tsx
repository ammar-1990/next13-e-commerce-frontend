import { Billboard as BillboardType } from "@/type";

type Props = {
  billboard: BillboardType;
};

const Billboard = ({ billboard }: Props) => {
  return (
    <div className="p-1 md:p-8 lg:p-10 ">
      <div
        style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
        className=" aspect-video  md:aspect-[2.4/1] rounded-xl w-full overflow-hidden bg-cover bg-center"
      >
        <div className="w-full h-full flex items-center justify-center ">
          <p className="font-bold text-md sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs w-full  text-center py-6 px-3 sm:py-12 sm:px-6 rounded-3xl backdrop-blur-sm bg-white/30 ">
            {billboard?.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
