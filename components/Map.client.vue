<template>
  <div class="map-container">
    <!-- Map Element -->
    <div id="map" ref="map" class="map"></div>

    <!-- GPS Button -->
    <button class="gps-button" @click="findUserLocation">
      <img src="@/assets/images/location.png" alt="Location"/>
    </button>
  </div>
  <CustomButton
      @click="onSubmit"
      text="ثبت و ادامه"
  />
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";

import "ol/ol.css";

import {Feature} from "ol";
import {Point} from "ol/geom";
import {Vector as VectorLayer} from "ol/layer";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import {fromLonLat} from "ol/proj";
import {Vector as VectorSource} from "ol/source";
import OSM from "ol/source/OSM";
import {Icon, Style} from "ol/style";
import View from "ol/View";

const map = ref(null);
const markerLayer = ref(null);
const userCoordinates = ref([]);
const emit = defineEmits(["submit"]);

onMounted(() => {
  nextTick(() => {
    try {
      // Initialize the map
      map.value = new Map({
        target: "map", // Ensure this matches the `div` ID
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([51.389, 35.6892]), // Default to Tehran
          zoom: 13,
        }),
      });

      // Add a layer for markers
      const vectorSource = new VectorSource();
      markerLayer.value = new VectorLayer({
        source: vectorSource,
        style: new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom Marker Icon
            scale: 0.05,
          }),
        }),
      });
      map.value.addLayer(markerLayer.value);

      // Add a click event to add a marker and log location
      map.value.on("click", (event) => {
        const coordinates = event.coordinate;
        userCoordinates.value = coordinates;
        // Add a marker at the clicked location
        const feature = new Feature({
          geometry: new Point(coordinates),
        });
        markerLayer.value.getSource().clear(); // Clear previous markers
        markerLayer.value.getSource().addFeature(feature);
      });
    } catch (error) {
      console.error("Error initializing the map:", error);
    }
  });
});

// Geolocation API to center the map on user's location
const findUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          const userLocation = fromLonLat([longitude, latitude]);

          console.log("User's GPS location:", {
            coords: [longitude, latitude],
            latitude,
            longitude,
          });

          userCoordinates.value = [longitude, latitude];

          // Update the map's view
          map.value.getView().setCenter(userLocation);
          map.value.getView().setZoom(15);

          // Add a marker at the user's location
          const feature = new Feature({
            geometry: new Point(userLocation),
          });
          markerLayer.value.getSource().clear();
          markerLayer.value.getSource().addFeature(feature);
        },
        (error) => {
          let errorMessage = "Unable to retrieve your location.";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Permission to access location was denied.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out.";
              break;
            default:
              errorMessage = "An unknown error occurred.";
          }
          push.error({
            message: errorMessage,
          });
        },
        {
          enableHighAccuracy: true, // Try to get the most accurate location
          timeout: 10000, // Maximum time to wait for a response (10 seconds)
          maximumAge: 0, // Do not use cached location
        }
    );
  } else {
    console.error("Geolocation API not supported.");
    alert("Geolocation is not supported by your browser.");
  }
};
const onSubmit = () => {
  emit("submit", userCoordinates.value);
};
</script>

<style scoped lang="scss">
.map-container {
  height: 70vh;
  position: relative;

  .map {
    height: 100%;
    min-height: 400px;
    width: 100%;
  }

  .button-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;

    .inner {
      border-radius: 4px;
      background-color: #ffffff;
      padding: 20px 0;

      button {
        width: 100%;
        background-color: var(--achare-main);
      }
    }
  }

  .gps-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    width: 58px;
    height: 58px;
  }
}
</style>
