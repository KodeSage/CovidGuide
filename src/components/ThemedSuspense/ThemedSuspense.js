/** @format */
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const ThemedSuspense = () =>
{
    const loading = true;
	return (
		<div className="h-screen bg-gray-100 dark:bg-gray-700">
			<div className="flex items-center justify-center p-64">
				<ScaleLoader color="#21409A" loading={loading} width={10} />
			</div>
		</div>
	);
}

export default ThemedSuspense;
