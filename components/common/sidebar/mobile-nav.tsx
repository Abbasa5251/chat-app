"use client";
import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import { Card } from "../../ui/card";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Button } from "../../ui/button";
import { useConversation } from "@/hooks/useConversation";
import { ThemeToggle } from "../theme-toggle";

function MobileNav() {
	const paths = useNavigation();
	const { isActive } = useConversation();

	if (isActive) return;

	return (
		<Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
			<nav className="w-full">
				<ul className="flex justify-evenly items-center">
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
									<TooltipContent>{path.name}</TooltipContent>
								</Tooltip>
							</Link>
						</li>
					))}
					<li>
						<ThemeToggle />
					</li>
					<li>
						<UserButton />
					</li>
				</ul>
			</nav>
		</Card>
	);
}

export default MobileNav;
