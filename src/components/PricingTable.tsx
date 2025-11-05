const PricingTable = () => {
  return (
    <div className="bg-background text-foreground py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="border-t border-border pt-12">
          <h3 className="text-3xl font-bold text-center mb-6">7 Day Free Trial</h3>
          <stripe-pricing-table 
            pricing-table-id="prctbl_1SQ9v7G7cympBc4IoqBe5mIF"
            publishable-key="pk_live_51Qn6VFG7cympBc4IA08eEyFC0UcNTBmHxl4SvxBr2nQugXsezKLcEiKdEcmdeTLxbYNQIXnhnrXtHNTvoribSpV700GFoEAA3a">
          </stripe-pricing-table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
