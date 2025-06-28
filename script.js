// Inicializar el mapa
function initMap() {
    // Configuración inicial (centrado en Bogotá)
    const map = L.map('map-container').setView([4.6097, -74.0817], 13);

    // Capa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marcador con popup
    L.marker([4.6097, -74.0817]).addTo(map)
        .bindPopup('¡Hola, este es mi primer mapa!<br> - @jasilva');

    // Opcional: Añadir círculo o polígonos
    L.circle([4.6097, -74.0817], {
        color: '#3498db',
        fillColor: '#2980b9',
        fillOpacity: 0.3,
        radius: 500
    }).addTo(map).bindPopup('Zona de interés');
}

// Iniciar el mapa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMap);