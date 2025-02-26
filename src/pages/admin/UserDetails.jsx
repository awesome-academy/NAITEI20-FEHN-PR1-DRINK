import PageBreadcrumb from "../../components/PageBreadcrumb";
import UserMetaCard from "../../components/admin/users/UserMetaCard";
import UserInfoCard from "../../components/admin/users/UserInfoCard";
import UserAddressCard from "../../components/admin/users/UserAddressCard";

export default function UserDetails() {
  return (
    <>
      <PageBreadcrumb pageTitle="Thông tin cá nhân" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7 dark:text-white/90">
          Thông tin cá nhân
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
