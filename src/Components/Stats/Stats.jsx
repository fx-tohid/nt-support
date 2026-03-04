const Stats = ({ progress, solved }) => {



    return (
        <div className="w-full bg-[#F5F5F5] py-16 px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="rounded-lg p-10 text-white bg-linear-to-r from-purple-600 to-purple-400 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-medium mb-4">In-Progress</h2>
                    <span className="text-5xl font-semibold">{progress}</span>
                </div>

                <div className="rounded-lg p-10 text-white bg-linear-to-r from-green-500 to-teal-500 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-medium mb-4">Resolved</h2>
                    <span className="text-5xl font-semibold">{solved}</span>
                </div>

            </div>
        </div>

    );
};

export default Stats;