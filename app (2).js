document.addEventListener('DOMContentLoaded', () => {
    AFRAME.registerComponent('ar-environment-data', {
        init: function () {
            this.el.sceneEl.addEventListener('gps-camera-update-position', (event) => {
                const coords = event.detail.position;
                console.log('Current Position:', coords);
                updateDataVisualization(coords);
            });
        }
    });

    function updateDataVisualization(coords) {
        // Replace with actual data fetching logic
        const exampleData = {
            airQuality: Math.random() * 100,
            waterQuality: Math.random() * 100
        };
        console.log('Environmental Data:', exampleData);

        // Logic to update AR content
        const box = document.querySelector('a-box');
        box.setAttribute('material', 'color', getAirQualityColor(exampleData.airQuality));
    }

    function getAirQualityColor(quality) {
        if (quality > 75) return 'green';
        if (quality > 50) return 'yellow';
        if (quality > 25) return 'orange';
        return 'red';
    }
});

// Register the custom component to A-Frame
AFRAME.registerComponent('ar-environment-data', {});
