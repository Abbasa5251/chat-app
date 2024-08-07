"use client";
import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import { Card } from "../../ui/card";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Button } from "../../ui/button";
import { ThemeToggle } from "../theme-toggle";

function DesktopNav() {
	const paths = useNavigation();
	return (
		<Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
			<nav>
				<ul className="flex flex-col items-center gap-4">
					{paths.map((path, idx) => (
						<li key={idx} className="relative">
							<Link href={path.href}>
								<Tooltip>
									<TooltipTrigger>
										<Button
											size={"icon"}
											variant={
												path.active
													? "default"
													: "outline"
											}
										>
											{path.icon}
										</Button>
									</TooltipTrigger>
									<TooltipContent side="right">
										{path.name}
									</TooltipContent>
								</Tooltip>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex flex-col items-center gap-4">
				<ThemeToggle />
				<UserButton />
			</div>
		</Card>
	);
}

export default DesktopNav;
