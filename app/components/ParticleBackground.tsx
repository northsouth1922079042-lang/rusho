'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    // Check for WebGL support and reduced motion preference
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!gl || prefersReducedMotion) {
      setFallback(true)
      return
    }

    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particle system
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20

      velocities[i] = (Math.random() - 0.5) * 0.02
      velocities[i + 1] = (Math.random() - 0.5) * 0.02
      velocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x14b8a6,
      size: 2,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    camera.position.z = 10

    sceneRef.current = scene
    rendererRef.current = renderer

    // Animation loop
    const animate = () => {
      const positions = particles.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Wrap particles around
        if (positions[i] > 10) positions[i] = -10
        if (positions[i] < -10) positions[i] = 10
        if (positions[i + 1] > 10) positions[i + 1] = -10
        if (positions[i + 1] < -10) positions[i + 1] = 10
        if (positions[i + 2] > 10) positions[i + 2] = -10
        if (positions[i + 2] < -10) positions[i + 2] = 10
      }

      particles.geometry.attributes.position.needsUpdate = true
      particles.rotation.y += 0.001
      
      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      if (sceneRef.current) {
        sceneRef.current.clear()
      }
    }
  }, [])

  if (fallback) {
    return (
      <div className="particle-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-500/5 to-primary-500/10 animate-pulse" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent-400 rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return <canvas ref={canvasRef} className="particle-bg" />
}