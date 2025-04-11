import React, { useEffect, useRef, Suspense, useMemo } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

const Developer = ({ animationName = 'idle', ...props }) => {
  return (
    <Suspense fallback={null}>
      <DeveloperContent animationName={animationName} {...props} />
    </Suspense>
  );
};

const DeveloperContent = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const idle = useFBX('/models/animations/idle.fbx');
  const salute = useFBX('/models/animations/salute.fbx');
  const clapping = useFBX('/models/animations/clapping.fbx');
  const victory = useFBX('/models/animations/victory.fbx');

  // Rename animation clips properly
  idle.animations[0].name = 'idle';
  salute.animations[0].name = 'salute';
  clapping.animations[0].name = 'clapping';
  victory.animations[0].name = 'victory';

  const allAnimations = [
    idle.animations[0],
    salute.animations[0],
    clapping.animations[0],
    victory.animations[0],
  ];

  // Fix animation target mismatch
  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    allAnimations.forEach((clip) => {
      clip.tracks.forEach((track) => {
        track.name = track.name.replace('Armature|', ''); // Remove Armature| if exists
      });
    });
  }, [allAnimations]);

  useEffect(() => {
    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
};

export default Developer;
