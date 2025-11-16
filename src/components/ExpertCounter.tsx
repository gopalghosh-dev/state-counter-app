"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

	const plusone = () => {
		if (count <= 99) {
			setCount(count + 1);
		}
	};

	const minusone = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};

	const plusten = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minusten = () => {
		if (count >= 1) {
			setCount(count - 10);
		}
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
					disabled={count < 1}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusone}
					disabled={count > 99}
					className="cursor-pointer">
					<CirclePlus />
					Plus 1
				</Button>

				<Button
					onClick={minusten}
					disabled={count < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>

				<Button
					onClick={plusten}
					disabled={count > 90}
					className="cursor-pointer">
					<CirclePlus />
					Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounter;
