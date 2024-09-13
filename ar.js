let isNavigating = false;

async function enableCamera() {
  const camera = document.getElementById('camera');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    camera.srcObject = stream;
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

function startNavigation() {
  if (!isNavigating) {
    isNavigating = true;
    console.log('Navigation started...');
    fetchLocations();
    // Add AR functionality here
  }
}

function stopNavigation() {
  if (isNavigating) {
    isNavigating = false;
    console.log('Navigation stopped...');
  }
}

async function fetchLocations() {
  try {
    const response = await fetch('/api/locations');
    const locations = await response.json();
    console.log('Fetched locations:', locations);
    // Implement AR logic here to visualize navigation based on the locations
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
}

function openAdminLogin() {
  document.getElementById('admin-login').style.display = 'block';
}

window.onload = enableCamera;
