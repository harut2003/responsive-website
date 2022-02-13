import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import Select from "../select/Select";
import "./MapChart.scss";

const statistics = [
  { country: "United States of America", ISO_A2: "US", rating: 200 },
  { country: "China", ISO_A2: "CN", rating: 65 },
  { country: "United Kingdom", ISO_A2: "GB", rating: 22 },
];

const setMapStyle = (geo) => {
  const highRating = statistics.reduce((agg, country) => {
    if (agg.rating < country.rating) {
      agg = { ...country };
    }
    return agg;
  });
  return {
    default: {
      fill: geo.properties.ISO_A2 === highRating.ISO_A2 ? "#FACF70" : "#D6D6DA",
      outline: "none",
    },
    hover: {
      fill: "green",
      outline: "none",
    },
  };
};

function MapChart() {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }
  function handleMoveEnd(position) {
    setPosition(position);
  }
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="title_map_context">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Geographic Data</h4>
          <Select />
        </div>
        <div className="map_container">
          <div className="coubes">
            <button className="coub" onClick={handleZoomIn}>+</button>
            <button className="coub" onClick={handleZoomOut}>-</button>
          </div>
          <div className="map_context">
            <ComposableMap
              projectionConfig={{
                scale: 155,
                rotation: [-11, 0, 0],
              }}
              width={800}
              height={400}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
              >
                <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={setMapStyle(geo)}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="select_context">
          <Select
            options={["Affiliate Sign Ups", "Lorem", "Ipsum"]}
            width={180}
            fontSize={20}
          />
        </div>
        <div>
          {statistics.map((item, i) => (
            <div className="ratings" key={i}>
              <p>
                <span>
                  {i + 1}. {item.country}
                </span>
                <span>{item.rating}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapChart;
