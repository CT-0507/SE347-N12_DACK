import { memo } from "react";

const AdminLayout = memo(() => {
    return (
        <>
            <LayoutHeader />
            <Outlet />
            <LayoutFooter />
            <ScrollButton />
        </>
    )
})
export default AdminLayout