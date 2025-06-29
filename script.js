// Inicializar el mapa
function initMap() {
  // Configuración inicial (centrado en Bogotá)
  const map = L.map("map-container").setView([7.3783551,-72.65019340000001], 13);

  // Capa base (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Marcador con popup
  L.marker([7.3783551,-72.65019340000001])
    .addTo(map)
    .bindPopup("¡Hola, este es mi primer mapa!<br> - @jasilva");

  // Opcional: Añadir círculo o polígonos
  L.circle([7.3783551,-72.65019340000001], {
    color: "#3498db",
    fillColor: "#2980b9",
    fillOpacity: 0.3,
    radius: 500,
  })
    .addTo(map)
    .bindPopup("Zona de interés: Pamplona");

  // Cargar KML (asegúrate de que la ruta sea correcta)

  const kmlLayer = omnivore
    .kml(
      "kml/veredasPamplona.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Obtiene el estilo correspondiente al styleUrl
          return (
            styleMap[feature.properties.styleUrl] || {
              // Estilo por defecto si no se encuentra
              fillColor: "#3388ff",
              fillOpacity: 0.5,
              color: "#3388ff",
              weight: 2,
            }
          );
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("ready", function () {
      map.fitBounds(kmlLayer.getBounds());
    })
    .on("error", function (e) {
      console.error("Error al cargar KML:", e.error);
    })
    .addTo(map);

  // Cargar el archivo KML con la ruta
  const kmlLayerRutaSabaneta = omnivore
    .kml(
      "kml/RutaSabaneta.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Personalización específica para LineStrings (rutas)
          if (feature.geometry.type === "LineString") {
            return {
              color: "#FF0000", // Color rojo para la ruta
              weight: 5, // Grosor de la línea
              opacity: 0.8, // Transparencia de la línea
              dashArray: "5, 5", // Opcional: línea discontinua
              lineJoin: "round", // Bordes redondeados
            };
          }
          // Estilo por defecto para otros elementos (puntos, polígonos)
          return {
            color: "#3388ff",
            weight: 2,
          };
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("error", function (e) {
      console.error("Error al cargar el KML:", e.error);
    })
    .addTo(map);

  const kmlLayerRutaRosal = omnivore
    .kml(
      "kml/RutaRosal.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Personalización específica para LineStrings (rutas)
          if (feature.geometry.type === "LineString") {
            return {
              color: "#FF0000", // Color rojo para la ruta
              weight: 5, // Grosor de la línea
              opacity: 0.8, // Transparencia de la línea
              dashArray: "5, 5", // Opcional: línea discontinua
              lineJoin: "round", // Bordes redondeados
            };
          }
          // Estilo por defecto para otros elementos (puntos, polígonos)
          return {
            color: "#3388ff",
            weight: 2,
          };
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("error", function (e) {
      console.error("Error al cargar el KML:", e.error);
    })
    .addTo(map);

  const kmlLayerRutaNaranjo = omnivore
    .kml(
      "kml/RutaNaranjo.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Personalización específica para LineStrings (rutas)
          if (feature.geometry.type === "LineString") {
            return {
              color: "#FF0000", // Color rojo para la ruta
              weight: 5, // Grosor de la línea
              opacity: 0.8, // Transparencia de la línea
              dashArray: "5, 5", // Opcional: línea discontinua
              lineJoin: "round", // Bordes redondeados
            };
          }
          // Estilo por defecto para otros elementos (puntos, polígonos)
          return {
            color: "#3388ff",
            weight: 2,
          };
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("error", function (e) {
      console.error("Error al cargar el KML:", e.error);
    })
    .addTo(map);

  const kmlLayerRutaUlaga = omnivore
    .kml(
      "kml/RutaUlaga.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Personalización específica para LineStrings (rutas)
          if (feature.geometry.type === "LineString") {
            return {
              color: "#FF0000", // Color rojo para la ruta
              weight: 5, // Grosor de la línea
              opacity: 0.8, // Transparencia de la línea
              dashArray: "5, 5", // Opcional: línea discontinua
              lineJoin: "round", // Bordes redondeados
            };
          }
          // Estilo por defecto para otros elementos (puntos, polígonos)
          return {
            color: "#3388ff",
            weight: 2,
          };
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("error", function (e) {
      console.error("Error al cargar el KML:", e.error);
    })
    .addTo(map);
  const kmlLayerNegavita = omnivore
    .kml(
      "kml/RutaNegavita.kml",
      null,
      L.geoJson(null, {
        style: function (feature) {
          // Personalización específica para LineStrings (rutas)
          if (feature.geometry.type === "LineString") {
            return {
              color: "#FF0000", // Color rojo para la ruta
              weight: 5, // Grosor de la línea
              opacity: 0.8, // Transparencia de la línea
              dashArray: "5, 5", // Opcional: línea discontinua
              lineJoin: "round", // Bordes redondeados
            };
          }
          // Estilo por defecto para otros elementos (puntos, polígonos)
          return {
            color: "#3388ff",
            weight: 2,
          };
        },
        onEachFeature: function (feature, layer) {
          // Opcional: Mostrar información en popup
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        },
      })
    )
    .on("error", function (e) {
      console.error("Error al cargar el KML:", e.error);
    })
    .addTo(map);
}

// Iniciar el mapa cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initMap);

const styleMap = {
  "#msn_ylw-pushpin": {
    fillColor: "#FFFF00", // Color
    fillOpacity: 0.1,
    color: "#FFFF00", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin2": {
    fillColor: "#FFFF00", // Color
    fillOpacity: 0.1,
    color: "#FFFF00", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin30": {
    fillColor: "#ff33c7", // Color
    fillOpacity: 0.1,
    color: "#ff33c7", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin3": {
    fillColor: "#ff33c7", // Color
    fillOpacity: 0.1,
    color: "#ff33c7", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin10": {
    fillColor: "#33ecff", // Color
    fillOpacity: 0.1,
    color: "#33ecff", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin1": {
    fillColor: "#33ff80", // Color
    fillOpacity: 0.1,
    color: "#33ff80", // Borde
    weight: 1,
  },
  "#msn_ylw-pushpin0": {
    fillColor: "#ff3333", // Color
    fillOpacity: 0.1,
    color: "#ff3333", // Borde
    weight: 1,
  },
  "#poly-BDBDBD-1200-76": {
    fillColor: "#BDBDBD",
    fillOpacity: 0.1,
    color: "#BDBDBD",
    weight: 1.2,
  },
  // Añade más estilos según sea necesario
};
