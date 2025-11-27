import * as THREE from 'three'
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import KatanaModel from '../../../public/models/KatanaModel'


// CAMERA ANIMATION
const AnimatedCamera = () => {
  const { camera } = useThree()
  const clock = useRef(new THREE.Clock())

  useFrame(() => {
    const t = clock.current.getElapsedTime()
    camera.position.x = 7 + Math.sin(t) * 5
    camera.position.y = 10
    camera.position.z = 45
    camera.lookAt(0, 0, 0)
  })

  return null
}

const KatanaModal = () => {

  const swordRef = useRef()

  const handleHover = () => {
    if (!swordRef.current) return
    gsap.to(swordRef.current.rotation, {
      x: -1,
      y: -1,
      z: 0,
      duration: 1,
      ease: "power3.out",
    })
  }

  const handleHoverOut = () => {
    if (!swordRef.current) return
    gsap.to(swordRef.current.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      ease: "power3.out",
    })
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="phone_container"
    >
      <Canvas camera={{ fov: 10 }}>
        <KatanaModel swordRef={swordRef} />

        <pointLight
          intensity={8}
          distance={10}
          position={[5, 5, 5]}
          castShadow
        />

        <Environment files="/models/gem.hdr" />
        <AnimatedCamera />
      </Canvas>
    </div>
  )
}

export default KatanaModal
