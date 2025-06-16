import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProviderCard from "../components/ProviderCard";
import providersData from "../data/providers.json";
import {FcSearch} from "react-icons/fc";

function ProvidersList() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProviders(providersData);
    }, 500);
  }, []);

  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Find a Learning Support Provider
      </h1>

      <div className="flex items-center border-gray-300 border rounded pl-3 shadow-sm mb-6 ">
        <FcSearch size={18} />
        <input
          type="text"
          placeholder="Search by name or specialization..."
          className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((provider) => (
          <Link
            key={provider.id}
            to={`/providers/${provider.id}`}
            className="hover:scale-105 transition-transform"
          >
            <ProviderCard provider={provider} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProvidersList;
