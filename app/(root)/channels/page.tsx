import ConversationFallback from "@/components/common/conversation/fallback";
import ItemList from "@/components/common/item-list/item-list";
import React from "react";

type Props = {};

function ChannelPage({}: Props) {
	return (
		<>
			<ItemList title="Channels">Channel Page</ItemList>
			<ConversationFallback />
		</>
	);
}

export default ChannelPage;
