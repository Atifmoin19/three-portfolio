import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useGraph, useLoader } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import { AnimationMixer, TextureLoader, LoopOnce, LoopRepeat } from "three";

export default function Model(props) {
  const group = useRef();
  const { scene, animations, nodes, materials } = useGLTF(
    "/three-portfolio/bee.gltf"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { actions, mixer } = useAnimations(animations, scene);
  const texture = useLoader(
    TextureLoader,
    "/three-portfolio/textures/material_0_diffuse.png"
  );

  useEffect(() => {
    if (materials.material_0) {
      materials.material_0.map = texture;
      materials.material_0.needsUpdate = true;
    }
  }, [materials, texture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="bee110_110_correction">
                      <group name="bee110_110" />
                    </group>
                    <skinnedMesh
                      name="Object_116"
                      geometry={nodes.Object_116.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_116.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/three-portfolio/bee.gltf");
