import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import React, { useRef, useLayoutEffect, useState} from 'react'
import gsap from "gsap";
import { useSpring, animated, config } from "@react-spring/three";

export const KEYBOARD_HEIGHT = 0.65
export const NB_FLOORS = 2

function SceneTest(props) {
  const { nodes, materials } = useGLTF("/keys_cleaner.glb");
  const ref = useRef()
  const keyboardRef = useRef()
  const tl = useRef()
  const isHovered = useRef(false)
  const cylinder = useRef()
  const cylinder2 = useRef()
  const cylinder3 = useRef()
  const cylinder4 = useRef()
  const cylinder5 = useRef()

  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 2;
  }

  useFrame(({ clock }, state)=> {
    
    tl.current.seek(getScrollPercent() * tl.current.duration())
    // Rotation velocity
    const rotationVelocity = Math.sin(clock.getElapsedTime() * 4)
    // Rotation quantity
    // ref.current.rotation.z = a / 15
    
    // ref.current.scale.y (isHovered.current) ? += 0.01 : 1
    // ref.current.scale.x (isHovered.current )? time.current += 0.01 : 1
    // ref.current.scale.z (isHovered.current) ? time.current += 0.01 : 1
    // cylinder.current.rotation.y = rotationVelocity * 2

    if (isHovered.current) {
      if(ref.current.scale.x <= 1.2) {
        ref.current.scale.x += 0.05;
        ref.current.scale.y += 0.05;
        ref.current.scale.z += 0.05;
      }
    } 
    else {
      if(ref.current.scale.x >= 1) {
        ref.current.scale.x -= 0.05;
        ref.current.scale.y -= 0.05;
        ref.current.scale.z -= 0.05;
      }
      // ref.current.rotation.y = 0
    }
    // console.log(hoverModel)
  })
  
  useLayoutEffect( () => {
    tl.current = gsap.timeline()

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position, 
      {
        duration: 2,
        y: KEYBOARD_HEIGHT * (NB_FLOORS -1.5),
        x: KEYBOARD_HEIGHT * (1)
      },
      0
    )
    .to(
      keyboardRef.current.rotation,
      {
        duration: 2.3,
        z: -Math.PI / 4.2
      },
      0
    )
    .to(
      cylinder.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 0.5
      },
      0
    )
    .to(
      cylinder2.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 0.5
      },
      0
    )
    .to(
      cylinder3.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 0.5
      },
      0
    )
    .to(
      cylinder4.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 0.5
      },
      0
    )
    .to(
      cylinder5.current.rotation,
      {
        duration: 2,
        y: -Math.PI / 0.5
      },
      0
    )
    .to(
      keyboardRef.current.scale,
      {
        duration: 2.3,
        y: 1.1,
        x: 1.1,
        z: 1.1
      },
      0.5
    )
  
  }, [])

  return (
    <group {...props} dispose={null} ref={ref} onPointerOver={() => {isHovered.current = true}}
    onPointerLeave={() => {isHovered.current = false;}}>
      <group ref={keyboardRef}>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker_Panel.geometry}
        material={materials.Metalic_Body}
        position={[-1.812, 0.173, -1.033]} 
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Speaker_Memb.geometry}
          material={materials.Speakers}
          position={[1.812, -0.172, 0.478]}
        />
      </animated.mesh>
      <group position={[-2.131, 0.156, -0.49]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Metalic_Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials.Know_Plastic}
        />
      </group>
      <group position={[0.426, 0.156, -1.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.Metalic_Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_1.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_2.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel001.geometry}
        material={materials.Metalic_Body}
        position={[0.006, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hundido001.geometry}
        material={materials.Know_Plastic}
        position={[-0.566, 0.004, -1.045]}
        scale={[1, 1.017, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel.geometry}
        material={materials.Metalic_Body}
        position={[0.712, 0.173, -0.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hundido.geometry}
        material={materials.Know_Plastic}
        position={[0.712, 0.101, -0.477]}
        scale={[1, 0.65, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel_hundido_panel.geometry}
        material={materials.Metalic_Body}
        position={[-1.563, 0.155, -0.49]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Panel_hundido_circular001.geometry}
          material={materials.Know_Plastic}
          position={[0, -0.238, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa_sector_keys.geometry}
        material={materials.Metalic_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plug.geometry}
        material={materials.Knob_Dark_Ring}
        position={[2.239, -0.091, -1.193]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.257, 0.261, 0.257]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Negras.geometry}
        material={materials.Keys_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blancas.geometry}
        material={materials.Keys_White}
      />
      <group position={[-2.131, 0.183, -0.491]} scale={[1.064, 0.2, 1.064]} ref={cylinder}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <group position={[0.425, 0.183, -1.048]} scale={[1.064, 0.2, 1.064]} ref={cylinder2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <group
        position={[0.994, 0.183, -1.048]}
        rotation={[Math.PI, -0.21, Math.PI]}
        scale={[1.064, 0.2, 1.064]}
        ref={cylinder3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <group
        position={[1.564, 0.183, -1.048]}
        rotation={[0, 0.844, 0]}
        scale={[1.064, 0.2, 1.064]}
        ref={cylinder4}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <group
        position={[2.133, 0.183, -1.048]}
        rotation={[0, -0.883, 0]}
        scale={[1.064, 0.2, 1.064]}
        ref={cylinder5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials.Know_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials.Knob_Dark_Ring}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Metalic_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.Know_Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038_1.geometry}
        material={materials.Metalic_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.Metalic_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032_1.geometry}
        material={materials.Knob_Dark_Ring}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.Metalic_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033_1.geometry}
        material={materials.Knob_Dark_Ring}
      />
      </group>
    </group>
  );
}


export default function KeyboardScene() {
  
  return (
    <Canvas 
      // camera={{ position: [0, -0.25, 1] }}
      // camera={{ position: [0, 0, 6], rotation:[0,0,0] }}
    >
      
      {/* <OrbitControls enableZoom={false}/> */}
      {/* <pointLight position={[-50, -20, 10]} intensity={0.3} color="#f7221b" /> */}
      <pointLight position={[-30, 10, 10]} intensity={0.5} color="#fff" />
      {/* <ScrollControls pages={2} damping={0.25}>

</ScrollControls> */}
      <directionalLight position={[1, 2.0, 4.4]} intensity={0.6} />
      <SceneTest rotation={[-Math.PI / -2, 0, 0]} scale={1} />
      {/* <Environment preset="warehouse" /> */}
      {/* <Environment preset="sunset" /> */}
      {/* <Environment preset="studio" intensity={0.1}/>  */}

    </Canvas>
    
  );
}

useGLTF.preload("/keys_cleaner.glb");
