import BankAccountSection from "@/components/ui/ComparePage/BankAccountSection";
import ChooseCard from "@/components/ui/ComparePage/ChooseCard";
import CompareHero from "@/components/ui/ComparePage/CompareHero";
import CreditCardSection from "@/components/ui/ComparePage/CreditCard";
import ExtraFeatures from "@/components/ui/ComparePage/ExtraFeatures";
import Questions from "@/components/ui/ComparePage/Questions";

export default function page() {
  return (
    <div>
      <CompareHero />
      <ChooseCard />
      <CreditCardSection />
      <BankAccountSection />
      <ExtraFeatures />
      <Questions />
    </div>
  );
}
