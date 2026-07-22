'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberBackground() {
  const containerRef = useRef(null);
  const interactionRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !interactionRef.current) return;

    // --- 3. Three.js Background Particle Effect (The "Brain/Blob") ---
    const canvasContainer = containerRef.current;
    const interactionZone = interactionRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.0015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);

    // Particles definition
    const particleCount = 6000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorBrand = new THREE.Color(0x39FF14); // Neon Green
    const colorDark = new THREE.Color(0x1d8009); // Darker green

    for (let i = 0; i < particleCount; i++) {
        // Create a rough sphere/blob shape
        const radius = 100 + Math.random() * 50;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        // Mix colors
        const mixedColor = colorBrand.clone().lerp(colorDark, Math.random());
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;

        sizes[i] = Math.random() * 2.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Shader Material for better looking particles
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Mouse interaction setup
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    function animateThreeJS() {
        animationFrameId = requestAnimationFrame(animateThreeJS);
        const time = clock.getElapsedTime();

        // Smooth mouse following for the whole group
        targetX = mouseX * 0.05;
        targetY = mouseY * 0.05;
        
        particlesMesh.rotation.y += 0.002;
        particlesMesh.rotation.x += 0.001;
        
        // Slight parallax effect based on mouse (shifted to the right)
        const baseOffsetX = 120; // Shift to right
        particlesMesh.position.x += (baseOffsetX + mouseX * 0.05 - particlesMesh.position.x) * 0.05;
        particlesMesh.position.y += (-mouseY * 0.05 - particlesMesh.position.y) * 0.05;

        // Organic breathing/morphing effect
        const posAttribute = geometry.attributes.position;
        for(let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            // Read original position
            const ox = originalPositions[i3];
            const oy = originalPositions[i3+1];
            const oz = originalPositions[i3+2];
            
            // Apply sine wave based on time and position to create undulating surface
            const noise = Math.sin(time * 2 + ox * 0.01) * 2 + Math.cos(time * 1.5 + oy * 0.01) * 2;
            
            posAttribute.array[i3] = ox + noise * (ox/100);
            posAttribute.array[i3+1] = oy + noise * (oy/100);
            posAttribute.array[i3+2] = oz + noise * (oz/100);
        }
        posAttribute.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animateThreeJS();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (canvasContainer.contains(renderer.domElement)) {
        canvasContainer.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      />
      <div 
        ref={interactionRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />
    </>
  );
}
