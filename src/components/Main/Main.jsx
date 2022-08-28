import React from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import earthClouds from '../../materials/Earth/earthClouds.jpg'
import earthColorMapNight from '../../materials/Earth/earthColorMapNight.jpg'
import earthAlphaMap from '../../materials/Earth/earthAlphaMap.jpg'
import earthNormalMap from '../../materials/Earth/earthNormalMap.jpg'


/**
 * Function
 */
export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [earthColorMapNight, earthNormalMap, earthAlphaMap, earthClouds]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 12;
        cloudsRef.current.rotation.y = elapsedTime / 10;
    });

    return (
        <>
            <pointLight
                color='#e8fafc'
                position={[-20, 10, 5]}
                intensity={1.2}
            />
            <Stars
                radius={300}
                depth={60}
                count={20000}
                factor={7}
                saturation={0}
                fade={true}
            />
            <mesh ref={cloudsRef} position={[2, -.3, 1]}>
                <sphereGeometry args={[1.408, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} position={[2, -.3, 1]}>
                <sphereGeometry args={[1.401, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
        </>
    )
}
