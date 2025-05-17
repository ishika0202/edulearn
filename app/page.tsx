import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";
import Heading from "@/components/heading";
import FileUpload from "@/components/fileupload";
import UploadedFile from "@/components/fileUploadSection";
import QuizArea from "@/components/quizArea";
import Actions from "@/components/actions";
import Footer from "@/components/Footer";
// import { FeatureCard } from "@/components/FeatureCard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <>
      <div className={`${roboto.className} h-650 bg-gray-200`}>
        <Navbar />
        <div className="flex flex-col items-center justify-center p-10">
          <Heading />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center p-10">
            <FileUpload />
          </div>    
          <div>
            <UploadedFile />
          </div>
        </div>
        <div>
          <QuizArea />
        </div>
        <div className="items-center justify-center">
          <Actions />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
