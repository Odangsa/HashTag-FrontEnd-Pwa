import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import axios from 'axios';
import InputStore from '../../store/InputStore';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const libraries = ['places'];

const containerStyle = {
  width: '80vw',
  height: '20vh',
};

function GoogleMapComponent({ center }) {
  const [location, setLocation] = useState(center);
  const searchBoxRef = useRef(null);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const { setAddress, address, setTest } = InputStore();

  useEffect(() => {
    console.log(address);
  }, [address]);

  const getAddressFromLatLng = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            latlng: `${lat},${lng}`,
            key: GOOGLE_MAPS_API_KEY,
          },
        },
      );

      if (response.data.status === 'OK') {
        processAddressComponents(
          response.data.results[0].address_components,
          response.data.results[0].formatted_address,
        );
        return response.data.results[0].formatted_address;
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
    return '';
  };

  const onSearchBoxLoad = useCallback((ref) => {
    searchBoxRef.current = ref;
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      console.log('place: ', place);

      if (place.geometry) {
        const newLocation = {
          latitude: place.geometry.location.lat(),
          lat: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          lng: place.geometry.location.lng(),
        };
        setLocation(newLocation); // Update location for Marker
        setAddress({ ...address, details: place.formatted_address }); // Optional: Update address details with new place

        // Extract address components from the selected place and update address state
        const addressComponents = place.address_components;
        const formattedAddress = place.formatted_address;
        processAddressComponents(addressComponents, formattedAddress);
        setSearchBoxValue(formattedAddress);
      }
    }
  };

  const processAddressComponents = (components, formattedAddress) => {
    setTest(formattedAddress);
    console.log('formattedAddress: ', formattedAddress);
    const parts = formattedAddress.split(' ');
    console.log('parts: ', parts);

    const addressState = {
      country: '',
      state: '',
      city: '',
      street: '',
      zipcode: '',
    };

    if (parts.length > 0) {
      addressState.country = parts[0]; // 첫 번째 요소는 나라
    }
    if (parts.length > 1) {
      // 두 번째 요소가 '도'로 끝나면 주(도)에 할당
      if (parts[1].endsWith('도')) {
        addressState.state = parts[1];
      } else {
        addressState.city = parts[1];
      }
    }
    if (parts.length > 2) {
      // 두 번째 요소가 '도'로 끝나면 세 번째 요소는 시에 할당
      if (addressState.state) {
        addressState.city = parts[2];
        addressState.street = parts.slice(3).join(' ');
      } else {
        addressState.street = parts.slice(2).join(' ');
      }
    }
    components.forEach((component) => {
      if (component.types.includes('postal_code')) {
        addressState.zipcode = component.long_name;
      }
    });

    setAddress(addressState);
  };

  const handleMapClick = async (event) => {
    const newLocation = {
      latitude: event.latLng.lat(),
      lat: event.latLng.lat(),
      longitude: event.latLng.lng(),
      lng: event.latLng.lng(),
    };
    await setLocation(newLocation);
    const address = await getAddressFromLatLng(
      newLocation.latitude,
      newLocation.longitude,
    );
    setSearchBoxValue(address); // Update the search box value
  };

  // const fetchKakaoMapPlaceDetail = async (lat, lng) => {
  //   // 카카오맵 API를 호출하여 장소의 상세 정보를 가져옵니다.
  //   // 이 예제에서는 단순히 console.log로 출력합니다. 실제로는 API 호출 코드를 작성해야 합니다.
  //   console.log(`카카오맵에서 ${lat}, ${lng}의 상세 정보를 검색합니다.`);
  //   // 예: axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`, {headers: {Authorization: `KakaoAK ${YOUR_KAKAO_API_KEY}`}})
  // };

  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <div className="ml-[10vw] mt-2  flex w-2/5 flex-col pr-10">
          <h4 className="ml-[0.3vw] text-2xl font-bold">Place</h4>
          <StandaloneSearchBox
            onLoad={onSearchBoxLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              className="h-14 w-[80vw] rounded-lg border bg-primary px-1 text-center text-lg"
              type="text"
              placeholder="Search places..."
              value={searchBoxValue}
              onChange={(e) => setSearchBoxValue(e.target.value)}
            />
          </StandaloneSearchBox>
          <div>
            {/* Display address details from state */}
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={16}
              onClick={handleMapClick}
            >
              <Marker position={location} />
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </>
  );
}

export default GoogleMapComponent;
