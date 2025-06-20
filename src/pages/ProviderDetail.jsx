import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import providersData from "../data/providers.json";
import ProviderDetailsFallback from "../components/ProviderDetailsFallback";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {IoCalendar, IoClose} from "react-icons/io5";
import {FaStar} from "react-icons/fa6";
import {IoMdArrowBack} from "react-icons/io";
import {CgSandClock} from "react-icons/cg";

function ProviderDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(undefined);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const found = providersData.find((p) => p.id === parseInt(id));
        setProvider(found || null);
      }, 500);
    };
    fetchData();
  }, [id]);

  if (provider === undefined) {
    return (
      <ProviderDetailsFallback
        loading
        icon={<CgSandClock />}
        message="Loading provider..."
      />
    );
  }

  if (provider === null) {
    return (
      <ProviderDetailsFallback
        icon={<IoClose />}
        variant="error"
        message="Provider not found"
        actionText="← Go back"
        onAction={() => navigate("/")}
      />
    );
  }

  const {
    name,
    specialization,
    location,
    rating,
    image,
    longDescription,
    contactEmail,
    phoneNumber,
    availability = [],
  } = provider;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-2 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-md text-blue-600 cursor-pointer"
        >
          <IoMdArrowBack /> Back to List
        </button>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col sm:items-center gap-2 mb-2">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            onError={(e) => (e.target.src = "https://via.placeholder.com/96")}
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-800">{name}</h1>
            <p className="text-gray-600">{specialization}</p>
            <p className="flex items-center justify-center gap-2 text-sm text-yellow-500 font-medium mt-1">
              <FaStar size={20} color="#e8d52e" /> {rating} / 5
            </p>
          </div>
        </div>

        <div className="space-y-2 text-gray-700 mb-6">
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p className="text-gray-800">{longDescription}</p>
        </div>

        {availability.length > 0 && (
          <div className="mt-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <IoCalendar color="#30a573" />
              <span>Availability</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {availability.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span>{slot.day}</span>
                  <p className="text-sm text-gray-700 pl-6">{slot.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t text-sm text-gray-800">
          <p className="flex items-center justify-center gap-2 mb-2">
            <MdEmail color="#2563eb" /> <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:underline"
            >
              {contactEmail}
            </a>
          </p>
          <p className="flex items-center justify-center gap-1">
            <FaPhoneAlt color="#e63d3d" /> <strong>Phone:</strong> {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail;
