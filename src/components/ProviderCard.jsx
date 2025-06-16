import {FaStar} from "react-icons/fa6";

function ProviderCard({provider}) {
  const {name, specialization, location, rating, image} = provider;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between border border-gray-100 hover:border-blue-200 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          onError={(e) => (e.target.src = "https://via.placeholder.com/64")}
        />

        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">{specialization}</p>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Location:</span> {location}
        </p>
        <p className="flex items-center justify-center gap-2 text-yellow-500 font-medium">
          <FaStar size={20} color="#e8d52e" /> {rating} / 5
        </p>
      </div>

      <button className="cursor-pointer mt-4 w-full py-2 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
        View Profile
      </button>
    </div>
  );
}

export default ProviderCard;
