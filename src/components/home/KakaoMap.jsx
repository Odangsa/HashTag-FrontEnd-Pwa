import React, { useState } from 'react';
import axios from 'axios';

function PlaceSearch() {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          params: {
            query: query,
            size: 10,
          },
          headers: {
            Authorization: import.meta.env.VITE_KAKAO_REST_API_KEY,
          },
        },
      );

      setPlaces(response.data.documents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="장소 검색"
          className="w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSearch}
          className="ml-2 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          검색
        </button>
      </div>

      <ul className="space-y-4">
        {places.map((place) => (
          <li key={place.id} className="rounded-md bg-white p-4 shadow">
            <h3 className="text-lg font-semibold">{place.place_name}</h3>
            <p className="text-gray-500">주소: {place.address_name}</p>
            <p className="text-gray-500">
              카테고리: {place.category_group_name}
            </p>
            <a
              href={place.place_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              상세 정보
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaceSearch;
