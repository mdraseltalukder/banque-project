import FeatureAdvanced from "@/components/ui/FeaturePage/FeatureAdvancedStatis";
import FeatureAllInOneBank from "@/components/ui/FeaturePage/FeatureAllInOneBank";
import FeatureBanking from "@/components/ui/FeaturePage/FeatureBanking";
import FeatureChoose from "@/components/ui/FeaturePage/FeatureChoose";
import FeatureHelp from "@/components/ui/FeaturePage/FeatureHelp";
import FeatureHero from "@/components/ui/FeaturePage/FeatureHero";
import FeatureManageCard from "@/components/ui/FeaturePage/FeatureManageCard";
import FeatureSavings from "@/components/ui/FeaturePage/FeatureSavingAccount";
import FeatureTransactions from "@/components/ui/FeaturePage/FeatureTransactions";

export default function page() {
  return (
    <div>
      <FeatureHero />
      <FeatureTransactions />
      <FeatureManageCard />
      <FeatureAdvanced />
      <FeatureSavings />
      <FeatureAllInOneBank />
      <FeatureChoose />
      <FeatureBanking />
      <FeatureHelp />
    </div>
  );
}
