'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreePageHero({ shape = 'torus' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Dynamically get dimensions
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    // ==========================================
    // MATRIX 2D CANVAS IMPLEMENTATION
    // ==========================================
    if (shape === 'matrix') {
       const canvas = document.createElement('canvas');
       canvas.width = width;
       canvas.height = height;
       container.appendChild(canvas);
       const ctx = canvas.getContext('2d');
       
       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ日ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'.split('');
       const fontSize = 16;
       let columns = Math.floor(width / fontSize);
       let maxRows = Math.floor(height / fontSize) + 20;

       let drops = [];
       let grid = [];
       
       const initGrid = () => {
           drops = [];
           grid = [];
           columns = Math.floor(width / fontSize);
           maxRows = Math.floor(height / fontSize) + 20;
           for (let c = 0; c < columns; c++) {
               drops[c] = Math.floor(Math.random() * -maxRows);
               grid[c] = [];
               for (let r = 0; r < maxRows; r++) {
                   grid[c][r] = chars[Math.floor(Math.random() * chars.length)];
               }
           }
       };
       initGrid();

       let animationFrameId;
       let lastTime = 0;
       const tailLength = 15;

       const draw = (time) => {
           animationFrameId = requestAnimationFrame(draw);
           if (time - lastTime < 50) return; // ~20fps for classic choppy matrix look
           lastTime = time;

           ctx.clearRect(0, 0, width, height);
           ctx.font = fontSize + 'px monospace';

           for (let c = 0; c < columns; c++) {
               drops[c]++; // Move head down one row

               // Draw tail
               for (let t = 0; t < tailLength; t++) {
                   const r = drops[c] - t;
                   if (r >= 0 && r < maxRows) {
                       // Update char occasionally
                       if (Math.random() < 0.05) {
                           grid[c][r] = chars[Math.floor(Math.random() * chars.length)];
                       }
                       
                       const char = grid[c][r];
                       const opacity = 1 - (t / tailLength);
                       
                       if (t === 0) {
                           ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White head
                       } else {
                           ctx.fillStyle = `rgba(57, 255, 20, ${opacity * 0.9})`; // Neon green tail
                       }
                       ctx.fillText(char, c * fontSize, r * fontSize);
                   }
               }

               // Reset drop
               if (drops[c] - tailLength > maxRows && Math.random() > 0.9) {
                   drops[c] = 0;
               }
           }
       };
       animationFrameId = requestAnimationFrame(draw);

       const handleResize = () => {
           width = container.offsetWidth;
           height = container.offsetHeight;
           canvas.width = width;
           canvas.height = height;
           initGrid();
       };
       window.addEventListener('resize', handleResize);

       return () => {
           cancelAnimationFrame(animationFrameId);
           window.removeEventListener('resize', handleResize);
           if (container.contains(canvas)) {
               container.removeChild(canvas);
           }
       };
    }

    // ==========================================
    // THREE.JS IMPLEMENTATION FOR OTHER SHAPES
    // ==========================================
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.002);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 250;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const colorBrand = new THREE.Color(0x39FF14);

    let mainObject;
    let particles;

    // Define shapes based on prop
    if (shape === 'torus') {
      const geometry = new THREE.TorusKnotGeometry(50, 15, 100, 16);
      const material = new THREE.PointsMaterial({
        color: colorBrand,
        size: 2.5,
        transparent: true,
        opacity: 0.8
      });
      mainObject = new THREE.Points(geometry, material);
      scene.add(mainObject);
    } 
    else if (shape === 'icosahedron') {
      const geometry = new THREE.IcosahedronGeometry(70, 1);
      const material = new THREE.MeshBasicMaterial({
        color: colorBrand,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      mainObject = new THREE.Mesh(geometry, material);
      
      const pointsMat = new THREE.PointsMaterial({ color: colorBrand, size: 4 });
      const points = new THREE.Points(geometry, pointsMat);
      mainObject.add(points);
      scene.add(mainObject);
    }
    else if (shape === 'sphere') {
      const geometry = new THREE.SphereGeometry(60, 32, 32);
      const material = new THREE.PointsMaterial({
        color: colorBrand,
        size: 1.5,
        transparent: true,
        opacity: 0.6
      });
      mainObject = new THREE.Points(geometry, material);
      scene.add(mainObject);

      const ringGeo1 = new THREE.RingGeometry(80, 81, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: colorBrand, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat);
      ring1.rotation.x = Math.PI / 3;
      mainObject.add(ring1);

      const ringGeo2 = new THREE.RingGeometry(100, 101, 64);
      const ring2 = new THREE.Mesh(ringGeo2, ringMat);
      ring2.rotation.y = Math.PI / 3;
      mainObject.add(ring2);
    }
    else if (shape === 'helix') {
      mainObject = new THREE.Group();
      const pointsCount = 400;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsCount * 3);
      for (let i = 0; i < pointsCount; i++) {
        const t = (i / pointsCount) * Math.PI * 10;
        positions[i * 3] = Math.cos(t) * 40;
        positions[i * 3 + 1] = (i - pointsCount / 2) * 0.5;
        positions[i * 3 + 2] = Math.sin(t) * 40;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: colorBrand, size: 3 });
      const helix1 = new THREE.Points(geometry, material);
      
      const helix2 = helix1.clone();
      helix2.rotation.y = Math.PI;
      
      mainObject.add(helix1);
      mainObject.add(helix2);
      scene.add(mainObject);
    }
    else if (shape === 'cubes') {
      mainObject = new THREE.Group();
      const cubeGeo = new THREE.BoxGeometry(15, 15, 15);
      const cubeMat = new THREE.MeshBasicMaterial({ color: colorBrand, wireframe: true, transparent: true, opacity: 0.4 });
      for (let i = 0; i < 20; i++) {
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        cube.position.set(
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150
        );
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        mainObject.add(cube);
      }
      scene.add(mainObject);
    }
    else if (shape === 'octahedron') {
      const geometry = new THREE.OctahedronGeometry(60, 0);
      const material = new THREE.MeshBasicMaterial({ color: colorBrand, wireframe: true, transparent: true, opacity: 0.5 });
      mainObject = new THREE.Mesh(geometry, material);
      
      const innerGeo = new THREE.OctahedronGeometry(30, 0);
      const innerMat = new THREE.MeshBasicMaterial({ color: colorBrand, transparent: true, opacity: 0.2 });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      mainObject.add(innerMesh);
      
      scene.add(mainObject);
    }
    else if (shape === 'ring') {
      const geometry = new THREE.TorusGeometry(60, 20, 16, 100);
      const material = new THREE.PointsMaterial({ color: colorBrand, size: 1.5, transparent: true, opacity: 0.8 });
      mainObject = new THREE.Points(geometry, material);
      scene.add(mainObject);
    }

    // Add ambient background particles
    const partGeo = new THREE.BufferGeometry();
    const partCount = 200;
    const partPos = new Float32Array(partCount * 3);
    for(let i=0; i<partCount; i++) {
      partPos[i*3] = (Math.random() - 0.5) * 600;
      partPos[i*3+1] = (Math.random() - 0.5) * 400;
      partPos[i*3+2] = (Math.random() - 0.5) * 400;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({ color: colorBrand, size: 1, transparent: true, opacity: 0.2 });
    particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.offsetWidth;
      height = containerRef.current.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let time = 0;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;
      
      if (mainObject) {
        if (shape === 'helix') {
          mainObject.rotation.y += 0.005;
        } else if (shape === 'cubes') {
          mainObject.rotation.y += 0.002;
          mainObject.rotation.x += 0.001;
          mainObject.children.forEach((c, i) => {
            c.rotation.x += 0.01 * (i % 2 === 0 ? 1 : -1);
            c.rotation.y += 0.01;
          });
        } else if (shape === 'octahedron') {
          mainObject.rotation.y += 0.005;
          mainObject.rotation.x += 0.002;
          const scale = 1 + Math.sin(time * 3) * 0.1;
          mainObject.scale.set(scale, scale, scale);
        } else {
          mainObject.rotation.y += 0.003;
          mainObject.rotation.x += 0.002;
        }
      }

      if (particles) {
        particles.rotation.y -= 0.001;
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [shape]);

  return (
    <div 
      className="hero-anim-container" 
      style={{ 
        position: 'absolute', 
        right: '2%', 
        top: '80px', 
        width: '100%',
        maxWidth: '700px', 
        height: '300px', 
        pointerEvents: 'none', 
        zIndex: 0 
      }}
    >
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
