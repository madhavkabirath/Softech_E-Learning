import CustomButton from "@/components/CustomeButton";
import Home_Carousel from "@/components/Home_Carousel";
import Numbering from "@/components/Numbering";
import Description from "@/components/description";

export default function Home() {
  return (
    <div>
      <Home_Carousel />
      <Description />
      <Numbering />
      <CustomButton />
      {" "}
    </div>
  );
}
