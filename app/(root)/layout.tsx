import Sidebar from "@/components/common/sidebar/sidebar";
import React from "react";

type Props = React.PropsWithChildren<{}>;

function Layout({ children }: Props) {
	return <Sidebar>{children}</Sidebar>;
}

export default Layout;
