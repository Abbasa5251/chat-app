import React from "react";
import DesktopNav from "./nav";
import MobileNav from "./mobile-nav";

type Props = React.PropsWithChildren<{}>;

function Sidebar({ children }: Props) {
	return (
		<div className="h-full w-full p-4 flex flex-col lg:flex-row gap-4">
			<MobileNav />
			<DesktopNav />
			<main className="h-[cal(100%-80px)] lg:h-wull w-full flex gap-4">
				{children}
			</main>
		</div>
	);
}

export default Sidebar;
