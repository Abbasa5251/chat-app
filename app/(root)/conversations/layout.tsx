import ItemList from "@/components/common/item-list/item-list";
import React from "react";

type Props = React.PropsWithChildren<{}>;

function ConversationsLayout({ children }: Props) {
	return (
		<>
			<ItemList title="Conversations">Conversations Page</ItemList>
			{children}
		</>
	);
}

export default ConversationsLayout;
