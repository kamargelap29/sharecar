/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
// import { useRouter } from "next/router";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  LayerGroup,
} from "react-leaflet";
import L from "leaflet";
// import { useActiveLocations } from "~/lib/fetcher";
// import location from "~/types/location";
import locationProps from "~/types/location";

// interface myCompProps {
//   children?: React.ReactNode;
// }

function MyMapsComponent({ data }: any) {
  const [position, setPosition] = React.useState(null);
  // const { data, loading }: any = useActiveLocations();

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      console.log(e.latlng);
    },
    mouseover() {
      data !== null ? map.flyTo(data, map.getZoom()) : null;
    },
  });

  // if (loading || data == `undefined`) return <span>Loading!!</span>;

  return position === null ? null : (
    <LayerGroup>
      <Marker position={position}>
        <Popup>lokasi anda saat ini</Popup>
      </Marker>
    </LayerGroup>
  );
}

const TestMap = ({ locdata, pos }: any) => {
  // const router = useRouter();
  // const { lng, lat } = router.query;

  // const map = useMapEvents({
  //   mouseover() {
  //     map.flyTo(pos, map.getZoom());
  //   },
  // });

  return (
    <MapContainer
      center={
        pos === null || pos === "undefined" ? [-6.172553, 106.863034] : pos
      }
      className="max-w-5xl z-10 absolute inset-0"
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "100%",
      }}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locdata?.map(
        ({ id, latitude, longitude, name, car_available }: locationProps) => {
          const newIcon = new L.Icon({
            iconUrl: "/assets/images/sharecar-map.png",
            iconSize: [30, 20],
            iconAnchor: [-6, 22],
            popupAnchor: [-6, -25],
            // shadowUrl: "",
            // shadowSize: [64, 64],
            // shadowAnchor: [22, 22],
          });

          return (
            <Marker
              key={`${id}`}
              icon={newIcon}
              position={[latitude, longitude]}
            >
              <Popup>{`${name}, ${car_available}`}</Popup>
            </Marker>
          );
        },
      )}
      <MyMapsComponent data={pos} />

      {/* <LayerGroup>
        <Marker position={[-6.172553, 106.863034]}></Marker>
        <Circle
          center={[-6.172553, 106.863034]}
          pathOptions={{ fillColor: "red" }}
          radius={100}
          stroke={false}
        />
      </LayerGroup> */}
    </MapContainer>
  );
};
export default TestMap;
