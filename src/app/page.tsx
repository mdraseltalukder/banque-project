import FeatureBanking from "@/components/ui/FeaturePage/FeatureBanking";
import Hero from "@/components/ui/HomePage/Hero";
import Notification from "@/components/ui/HomePage/Notification";
import OneApp from "@/components/ui/HomePage/OneApp";
import PerfectCard from "@/components/ui/HomePage/PerfectCard";
import SavingAccounts from "@/components/ui/HomePage/SavingAccounts";
import Testimonial from "@/components/ui/HomePage/Testimonial";
import Tools from "@/components/ui/HomePage/Tools";
import Transection from "./../components/ui/HomePage/Transection";
import FeatureHelp from "@/components/ui/FeaturePage/FeatureHelp";
import HomeBlog from "@/components/ui/HomePage/HomeBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <OneApp />
      <Transection />
      <SavingAccounts />
      <Notification />
      <Tools />
      <PerfectCard />
      <Testimonial />
      <FeatureBanking />
      <FeatureHelp />
      <HomeBlog />
    </>
  );
}
