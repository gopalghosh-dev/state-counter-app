"use client";

import { counterAtom } from "@/lib/atom";
import { useAtomValue } from "jotai";

const GlobalCounter = () => {
	const count = useAtomValue(counterAtom);

	return (
		<div className="text-center text-xl">
			Counter Value: <span className="font-semibold">{count}</span>
		</div>
	);
};

export default GlobalCounter;
