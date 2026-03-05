import { ShopifyFooter } from "@/components/shopify/layout/footer";
import { ShopifyHeader } from "@/components/shopify/layout/header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <ShopifyHeader />
      <main>{children}</main>
      <ShopifyFooter />
    </div>
  );
};

export default AppLayout;
