import {
  Center,
  Environment,
  GradientTexture,
  Lightformer,
  Text3D,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
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
    // symbolRef.current.rotation.z += delta / 2;
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
        <meshPhysicalMaterial roughness={0} metalness={0.9} reflectivity={2}>
          <GradientTexture
            // colors={["#3172ff", "#fc3bc2"]}
            colors={["#08142e", "#5c1446"]}
            // colors={["#0d214b", "#3b0c2d"]}
            // colors={["#d737ff", "#f7f326"]}
            // colors={["#26082e", "#053522"]}
            stops={[0, 1]}
          />
        </meshPhysicalMaterial>
      </Text3D>
    </Center>
  );
};

const HeroSymbol = () => {
  const { bloomIntensity, luminanceSmoothing, luminanceThreshold } =
    useControls({
      bloomIntensity: { value: 1, min: 0, max: 2, step: 0.01 },
      luminanceSmoothing: { value: 0.57, min: 0, max: 1, step: 0.01 },
      luminanceThreshold: { value: 0.17, min: 0, max: 1 },
    });

  const { middleGrey, maxLuminance } = useControls({
    middleGrey: { value: 0.6, min: 0, max: 1, step: 0.1 },
    maxLuminance: { value: 6, min: 0, max: 6, step: 0.5 },
  });

  const lighformerIntensity = 10;

  return (
    <Canvas style={{ width: "100%", flex: "1 1 100%" }}>
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

      <EffectComposer>
        <Bloom
          luminanceThreshold={luminanceThreshold}
          // mipmapBlur
          luminanceSmoothing={luminanceSmoothing}
          intensity={bloomIntensity}
        />
        {/* <ToneMapping middleGrey={middleGrey} maxLuminance={maxLuminance} /> */}
      </EffectComposer>

      <Symbol />
    </Canvas>
  );
};

export default HeroSymbol;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: any;
      outputPass: any;
    }
  }
}
