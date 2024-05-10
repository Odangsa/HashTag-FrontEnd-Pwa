import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import InputStore from '../../store/InputStore';

const { kakao } = window;

function KakaoMapComponent({ center }) {
  const [location, setLocation] = useState(center);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const { setAddress, address } = InputStore();
  const [placeCategory, setPlaceCategory] = useState('');
  const [relatedKeywords, setRelatedKeywords] = useState([]);

  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(location.latitude, location.longitude),
    });
    marker.setMap(map);

    const searchBox = new kakao.maps.services.Places();
    searchBoxRef.current = searchBox;

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng);
      setLocation({
        latitude: latlng.getLat(),
        longitude: latlng.getLng(),
      });
      getAddressFromLatLng(latlng.getLat(), latlng.getLng());
    });
  }, [location]);

  const getAddressFromLatLng = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
          },
        },
      );

      if (response.data.documents.length > 0) {
        const addressComponents = response.data.documents[0].address;
        const formattedAddress =
          response.data.documents[0].address.address_name;
        processAddressComponents(addressComponents, formattedAddress);
        setSearchBoxValue(formattedAddress);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const processAddressComponents = (components) => {
    const addressState = {
      country: '대한민국',
      state: components.region_1depth_name,
      city: components.region_2depth_name,
      street: components.region_3depth_name,
      zipcode: components.zip_code,
    };
    setAddress(addressState);
  };

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      console.log('place: ', place);

      if (place.y && place.x) {
        const newLocation = {
          latitude: parseFloat(place.y),
          longitude: parseFloat(place.x),
        };
        setLocation(newLocation);
        setAddress({ ...address, details: place.address_name });

        const addressComponents = {
          region_1depth_name: place.road_address_name.split(' ')[0],
          region_2depth_name: place.road_address_name.split(' ')[1],
          region_3depth_name: place.road_address_name.split(' ')[2],
          zip_code: place.zip_code,
        };
        processAddressComponents(addressComponents, place.address_name);
        setSearchBoxValue(place.address_name);

        setPlaceCategory(place.category_group_name);

        // Fetch related keywords using Kakao Places API
        searchBoxRef.current.keywordSearch(place.place_name, (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const keywords = data[0].place_name.split(' ');
            setRelatedKeywords(keywords);
          }
        });
      }
    }
  };

  return (
    <>
      <div className="ml-[10vw] mt-2 flex w-2/5 flex-col pr-10">
        <h4 className="ml-[0.3vw] text-2xl font-bold">Place</h4>
        <input
          className="h-14 w-[80vw] rounded-lg border bg-primary px-1 text-center text-lg"
          type="text"
          placeholder="Search places..."
          value={searchBoxValue}
          onChange={(e) => {
            setSearchBoxValue(e.target.value);
            searchBoxRef.current.keywordSearch(e.target.value, onPlacesChanged);
          }}
        />
        <div>
          <div ref={mapRef} style={{ width: '80vw', height: '20vh' }}></div>
          {placeCategory && <p>Category: {placeCategory}</p>}
          {relatedKeywords.length > 0 && (
            <div>
              <p>Related Keywords:</p>
              <ul>
                {relatedKeywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default KakaoMapComponent;
