import downimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'

const Card = ({appData}) => {
    console.log(appData)

    return (
        <div className="bg-white rounded-sm p-5 duration-300 hover:scale-105 hover:shadow-lg cursor-pointer space-y-5">
            <div className="p-5 bg-gray-200 rounded-b-sm">
                <img className="w-[300px] mx-auto" src={appData.image} alt="" />
            </div>
            <div>
                <h2>{appData.title}</h2>
            </div>
            <div className="flex justify-between items-center font-semibold">
                <h2 className="py-1 px-3 text-[#00D390] rounded-sm bg-[#F1F5E8]"><img className='inline-block mr-3' src={downimg} alt="" width={'16px'} />{appData.downloads}</h2>
                <h2 className="py-1 px-3 text-[#FF8F1E] rounded-sm bg-[#FFF0E1]"><img className='inline-block mr-3' src={ratingimg} alt="" width={'16px'} />{appData.ratingAvg}</h2>
            </div>
        </div>
    );
};

export default Card;