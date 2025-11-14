"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const AdvancedCounter = () => {
	const [count, setCount] = useState(0);

	const plusone = () => {
		setCount(count + 1);
	};

	const minusone = () => {
		setCount(count - 1);
	};

	const plusten = () => {
		setCount(count + 10);
	};

	const minusten = () => {
		setCount(count - 10);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value:
				<span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusone}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusone}
					className="cursor-pointer">
					<CirclePlus />
					Plus 1
				</Button>

				<Button
					onClick={minusten}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>

				<Button
					onClick={plusten}
					className="cursor-pointer">
					<CirclePlus />
					Plus 10
				</Button>
			</div>
		</div>
	);
};

export default AdvancedCounter;
