import { Canvas  , useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center, OrbitControls } from "@react-three/drei";

function SceneTest(props) {
  const { nodes, materials } = useGLTF("/keys_cleaner.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
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
      </mesh>
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
      <group position={[-2.131, 0.183, -0.491]} scale={[1.064, 0.2, 1.064]}>
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
      <group position={[0.425, 0.183, -1.048]} scale={[1.064, 0.2, 1.064]}>
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
  );
}


export default function KeyboardScene() {
  
  return (
    <Canvas 
      // camera={{ position: [0, -0.25, 1] }}
      // camera={{ position: [0, 0, 6], rotation:[0,0,0] }}
    >
      
      {/* <OrbitControls /> */}
        <Center >
          {/* <pointLight position={[-50, -20, 10]} intensity={0.3} color="#f7221b" /> */}
          {/* <pointLight position={[-50, 20, -10]} intensity={0.1} color="white" /> */}
          <SceneTest rotation={[-Math.PI / -2, 0, 0]} scale={1.2}/>
        </Center>
        <Environment preset="sunset" /> 
    </Canvas>
    
  );
}

useGLTF.preload("/keys_cleaner.glb");
