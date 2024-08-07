"use client";
import LoadingLogo from "@/components/common/loading-logo";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
	children: React.ReactNode;
};
const convex = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL as string
);

function ConvexClientProvider({ children }: Props) {
	return (
		<ClerkProvider>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<Authenticated>{children}</Authenticated>
				<AuthLoading>
					<LoadingLogo />
				</AuthLoading>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}

export default ConvexClientProvider;
