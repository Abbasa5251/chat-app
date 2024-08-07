import React from "react";
import { Loader2 } from "lucide-react";

type Props = { size?: number };

function LoadingLogo({ size = 100 }: Props) {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<Loader2 size={size} className="animate-spin" />
		</div>
	);
}

export default LoadingLogo;
