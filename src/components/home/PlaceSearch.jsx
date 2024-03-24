import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RealtimePlaceSearch() {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchPlaces = async () => {
      if (query.length > 0) {
        setIsSearching(true);
        try {
          const response = await axios.get(
            'https://dapi.kakao.com/v2/local/search/keyword.json',
            {
              params: { query: query, size: 5 },
              headers: {
                Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
              },
            },
          );
          setPlaces(response.data.documents);
        } catch (error) {
          console.error(error);
        }
        setIsSearching(false);
      } else {
        setPlaces([]);
      }
    };

    const timerId = setTimeout(() => {
      searchPlaces();
    }, 500);

    return () => clearTimeout(timerId);
  }, [query]);

  const handlePlaceClick = (placeName) => {
    setQuery(placeName);
  };

  return (
    <div className="m-7 mx-auto max-w-[82vw]">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="장소 검색"
          className="w-full rounded-md border bg-primary px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {isSearching && <div>검색 중...</div>}
      <ul className="space-y-4">
        {places.map((place) => (
          <li
            key={place.id}
            className="cursor-pointer rounded-md bg-white p-4 shadow"
            onClick={() => handlePlaceClick(place.place_name)}
          >
            <h3 className="text-lg font-semibold">{place.place_name}</h3>
            <p className="text-gray-500">주소: {place.address_name}</p>
            <p className="text-gray-500">
              카테고리: {place.category_group_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealtimePlaceSearch;
