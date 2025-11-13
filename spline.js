document.addEventListener('DOMContentLoaded', ()=>{
  const mem = navigator.deviceMemory || 4;      // fallback to “4 GB”
  const isLowEnd = mem < 1 || window.innerWidth < 768;

  if (isLowEnd) {
    // Replace the spline container with a static image
    document.querySelector('.spline-container')
            .innerHTML = '<img src="spline-fallback.jpg" alt="3D view">';
  } else {
    // Load the Spline viewer as usual
    const script = document.createElement('script');
    script.type = 'module';
    script.src  = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
    document.body.appendChild(script);
  }
});
