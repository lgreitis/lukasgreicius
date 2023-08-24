import {
  Center,
  Environment,
  GradientTexture,
  Lightformer,
  Text3D,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";
import { Group } from "three";

const SymbolGroup = () => {
  const symbolRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    symbolRef.current.rotation.y += delta / 2;
    symbolRef.current.position.y = THREE.MathUtils.lerp(
      symbolRef.current.position.y,
      Math.sin(t) / 5,
      0.1,
    );
  });

  // TODO: simplify and optimize
  return (
    <Center ref={symbolRef}>
      <Text3D
        size={2}
        height={0.5}
        font="/fonts/Inter_Bold.json"
        bevelEnabled
        bevelThickness={0.1}
        bevelSegments={16}
        bevelSize={0.1}
      >
        {"<"}
        <meshPhysicalMaterial roughness={0} metalness={0.9} reflectivity={2}>
          {/* TODO: find nice colors */}
          <GradientTexture colors={["#3172ff", "#fc3bc2"]} stops={[0, 1]} />
        </meshPhysicalMaterial>
      </Text3D>
      <Text3D
        size={2}
        height={0.5}
        font="/fonts/Inter_Bold.json"
        position={[1.8, 0, 0]}
        bevelEnabled
        bevelThickness={0.1}
        bevelSegments={16}
        bevelSize={0.1}
      >
        {"/"}
        <meshPhysicalMaterial roughness={0} metalness={0.9} reflectivity={2}>
          {/* TODO: find nice colors */}
          <GradientTexture colors={["#3172ff", "#fc3bc2"]} stops={[0, 1]} />
        </meshPhysicalMaterial>
      </Text3D>
      <Text3D
        size={2}
        height={0.5}
        font="/fonts/Inter_Bold.json"
        position={[3, 0, 0]}
        bevelEnabled
        bevelThickness={0.1}
        bevelSegments={16}
        bevelSize={0.1}
      >
        {">"}
        <meshPhysicalMaterial roughness={0} metalness={0.9} reflectivity={2}>
          {/* TODO: find nice colors */}
          <GradientTexture colors={["#3172ff", "#fc3bc2"]} stops={[0, 1]} />
        </meshPhysicalMaterial>
      </Text3D>
    </Center>
  );
};

const Symbol = () => {
  const symbolRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    symbolRef.current.rotation.y += delta / 2;
    symbolRef.current.position.y = THREE.MathUtils.lerp(
      symbolRef.current.position.y,
      Math.sin(t) / 5,
      0.1,
    );
  });

  return (
    <Center ref={symbolRef}>
      <Text3D
        size={2}
        height={0.5}
        font="/fonts/Inter_Bold.json"
        bevelEnabled
        bevelThickness={0.1}
        bevelSegments={16}
        bevelSize={0.1}
      >
        {"</>"}
        <meshPhysicalMaterial
          roughness={0}
          metalness={0.9}
          // clearcoat={0.6}
          // clearcoatRoughness={0.2}
          reflectivity={2}
          // color={"#3172ff"}
        >
          {/* TODO: find nice colors */}
          <GradientTexture
            colors={["#3172ff", "#fc3bc2"]}
            // colors={["#57ccbc", "#891ee0"]}
            stops={[0, 1]}
            // width={1024}
          />
        </meshPhysicalMaterial>
      </Text3D>
    </Center>
  );
};

const HeroSymbol = () => {
  const intensity = 1;
  const luminanceSmoothing = 0.57;
  const luminanceThreshold = 0.17;

  // const intensity = 0.85;
  // const luminanceSmoothing = 0.51;
  // const luminanceThreshold = 0.65;

  // const { intensity, luminanceSmoothing, luminanceThreshold } = useControls({
  //   intensity: { value: 1, min: 0, max: 2, step: 0.01 },
  //   luminanceSmoothing: { value: 0.57, min: 0, max: 1, step: 0.01 },
  //   luminanceThreshold: { value: 0.17, min: 0, max: 1 },
  // });

  const lighformerIntensity = 1;

  return (
    <Canvas>
      <Environment resolution={1024}>
        <Lightformer
          intensity={lighformerIntensity}
          rotation-x={Math.PI / 2}
          rotation-y={Math.PI / 4}
          position={[-2, 2, 0]}
          scale={[5, 5, 1]}
        />
        <Lightformer
          intensity={lighformerIntensity}
          rotation-x={Math.PI / 1.2}
          position={[0, 3, 4]}
          scale={[3, 3, 1]}
        />
        <Lightformer
          intensity={lighformerIntensity}
          rotation-x={Math.PI / -1.2}
          position={[0, -3, 4]}
          scale={[3, 3, 1]}
        />
        <Lightformer
          intensity={lighformerIntensity}
          rotation-y={Math.PI / 2}
          position={[4, 0, 0]}
          scale={[2, 2, 1]}
        />
        <Lightformer
          intensity={lighformerIntensity}
          position={[0, 0.5, 4]}
          scale={[5, 1.5, 1]}
        />
      </Environment>

      {/* <Effects>
<unreal
      </Effects> */}

      <EffectComposer>
        <Bloom
          luminanceThreshold={luminanceThreshold}
          mipmapBlur
          luminanceSmoothing={luminanceSmoothing}
          intensity={intensity}
        />
      </EffectComposer>

      <Symbol />
      {/* <SymbolGroup /> */}
      {/* <OrbitControls /> */}
      {/* <Stats /> */}
    </Canvas>
  );
};

export default HeroSymbol;
