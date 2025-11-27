import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export default function KatanaModel(props) {
  const { nodes, materials } = useGLTF('/models/blossom_katana.glb')

  return (
    <group
      {...props} dispose={null}>
      <group rotation={[0.1, 10, 0]}>
        <group name="main_Sword"
          ref={props.swordRef}
          rotation={[0, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.lambert1}
            position={[-0.02, -0.037, -3.25]}
            rotation={[0, 0, -0.005]}
            scale={1.015}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.lambert1}
            position={[-0.063, -0.006, -3.203]}
            rotation={[0, 0, -0.005]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_8.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_9.geometry}
          material={materials.lambert1}
          position={[-0.01, -0.022, -3.249]}
          scale={1.015}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_10.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_11.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_12.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_13.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_14.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_15.geometry}
          material={materials.lambert1}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_16.geometry}
          material={materials.lambert3}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_17.geometry}
          material={materials.lambert3}
          position={[-0.052, 0, -3.203]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial_18.geometry}
          material={materials.lambert4}
          position={[-0.052, 0, -3.203]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/blossom_katana.glb')