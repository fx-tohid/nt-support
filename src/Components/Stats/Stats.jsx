import vector1 from '../../assets/vector1.png'
import vector2 from '../../assets/vector2.png'

const Stats = ({ progress, solved }) => {

    const style = {
        background: `url('${vector1}')`,
        backgroundSize: 'full',
        backgroundRepeat: 'no-repeat'
    }
    const style2 = {
        background: `url('${vector2}')`,
        backgroundSize: 'full',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="w-full bg-[#F5F5F5] py-16 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="rounded-lg relative p-10 text-white bg-linear-to-r from-purple-600 to-purple-400 flex flex-col items-center justify-center">
                    <div className="stat-bg left-0 h-full w-1/2 absolute bg-no-repeat" style={style}></div>

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-lg font-medium mb-4">In-Progress</h2>
                        <span className="text-5xl font-semibold">{progress}</span>
                    </div>
                    <div className="stat-bg right-0 h-full w-1/2 absolute bg-no-repeat" style={style2}></div>
                </div>

                <div className="rounded-lg relative p-10 text-white bg-linear-to-r from-green-500 to-teal-500 flex flex-col items-center justify-center">
                    <div className="stat-bg left-0 h-full w-1/2 absolute bg-no-repeat" style={style}></div>


                    <div className='flex flex-col items-center justify-center '>
                        <h2 className="text-lg font-medium mb-4">Resolved</h2>
                        <span className="text-5xl font-semibold">{solved}</span>
                    </div>

                    <div className="stat-bg right-0 h-full w-1/2 absolute bg-no-repeat" style={style2}></div>

                </div>

            </div>
        </div>

    );
};

export default Stats;