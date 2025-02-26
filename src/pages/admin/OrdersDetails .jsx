import PageBreadcrumb from "../../components/PageBreadcrumb";
import OrderInfoCard from "../../components/admin/orders/OrderInfoCard";
import OrderProductsCard from "../../components/admin/orders/OrderProductsCard";

export default function OrderDetails() {
  return (
    <>
      <PageBreadcrumb pageTitle="Thông tin đơn hàng" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7 dark:text-white/90">
          Thông tin đơn hàng
        </h3>
        <div className="space-y-6">
          <OrderInfoCard />
          <OrderProductsCard />
        </div>
      </div>
    </>
  );
}
