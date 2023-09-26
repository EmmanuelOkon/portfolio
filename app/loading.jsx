import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <Image
        className="w-1/2 md:w-[18%] h-auto"
        src="/spinner.svg"
        alt="loading..."
        width={50}
        height={50}
      />
    </div>
  );
}