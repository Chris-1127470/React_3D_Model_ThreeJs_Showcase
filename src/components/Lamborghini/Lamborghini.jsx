import {React, useLayoutEffect, Suspense} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Canvas } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, Environment, Stage, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

import { Pagination } from "swiper";
import "swiper/css";

import "../Style-Guide.scss";

function Aventador(props) {
    const { scene, nodes, materials } = useGLTF('3D_Models/Lamborghini/Aventador.glb');
    useLayoutEffect(() => {
        scene.traverse((obj) => obj.type === 'Mesh' && (obj.recieveShadow = obj.castShadow = true))
    }, [scene, nodes, materials])
    return <primitive object={scene} {...props} />
}

function Hurricane(props) {
    const { scene, nodes, materials } = useGLTF('3D_Models/Lamborghini/Hurricane.glb');
    useLayoutEffect(() => {
        scene.traverse((obj) => obj.type === 'Mesh' && (obj.recieveShadow = obj.castShadow = true))
    }, [scene, nodes, materials])
    return <primitive object={scene} {...props} />
}

function TerzoMillennio(props) {
    const { scene, nodes, materials } = useGLTF('3D_Models/Lamborghini/Terzo_Millennio.glb');
    useLayoutEffect(() => {
        scene.traverse((obj) => obj.type === 'Mesh' && (obj.recieveShadow = obj.castShadow = true))
    }, [scene, nodes, materials])
    return <primitive object={scene} {...props} />
}

const Lamborghini = () => {
    return (<>
    
    <div className="slider js-slider">
            <Swiper
                  direction={"vertical"}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
            
            <SwiperSlide>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 55 }}>
                    <color attach="background" args={['#090909']} />
                    <fog attach="fog" args={['#090909', 10, 20]} />
                    <Suspense fallback={null}>
                        <Environment path="/cube" />
                        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment={null} intensity={1} contactShadow={false} shadowBias={-0.0015}>
                            <Aventador scale={0.5} />
                        </Stage>
                        <mesh rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[170, 170]} />
                            <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={40}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#090909"
                            metalness={0.5}
                            />
                        </mesh>
                        </PresentationControls>
                    </Suspense>
                </Canvas>
                <div className="vert-text">
                    <span>
                        Lamborghini <br/> Aventador
                    </span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-flex flex-col space-y-1 items-center justify-end  h-12">
                    <p className="text-sm font-medium tracking-widest leading-snug text-center text-gray-100 uppercase">
                        Drag Up
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="logo_line" stroke-dasharray="59" d="M6 9L12 15L18 9" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 55 }}>
                <color attach="background" args={['#090909']} />
                <fog attach="fog" args={['#090909', 10, 20]} />
                <Suspense fallback={null}>
                  <Environment path="/cube" />
                  <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={null} intensity={1} contactShadow={false} shadowBias={-0.0015}>
                      <TerzoMillennio scale={0.5} />
                  </Stage>
                  <mesh rotation={[-Math.PI / 2, 0, 0]}>
                      <planeGeometry args={[170, 170]} />
                      <MeshReflectorMaterial
                      blur={[300, 100]}
                      resolution={2048}
                      mixBlur={1}
                      mixStrength={40}
                      roughness={1}
                      depthScale={1.2}
                      minDepthThreshold={0.4}
                      maxDepthThreshold={1.4}
                      color="#090909"
                      metalness={0.5}
                      />
                  </mesh>
                  </PresentationControls>
                </Suspense>
              </Canvas>
              <div className="vert-text">
                  <span>
                      Lamborghini <br/> Terzo Millennio
                  </span>
              </div>
                  
            </SwiperSlide>
            <SwiperSlide>
              
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 55 }}>
              <color attach="background" args={['#090909']} />
              <fog attach="fog" args={['#090909', 10, 20]} />
              <Suspense fallback={null}>
                  <Environment path="/cube" />
                  <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={null} intensity={1} contactShadow={false} shadowBias={-0.0015}>
                      <Hurricane scale={0.5} />
                  </Stage>
                  <mesh rotation={[-Math.PI / 2, 0, 0]}>
                      <planeGeometry args={[170, 170]} />
                      <MeshReflectorMaterial
                      blur={[300, 100]}
                      resolution={2048}
                      mixBlur={1}
                      mixStrength={40}
                      roughness={1}
                      depthScale={1.2}
                      minDepthThreshold={0.4}
                      maxDepthThreshold={1.4}
                      color="#090909"
                      metalness={0.5}
                      />
                  </mesh>
                  </PresentationControls>
              </Suspense>
              </Canvas>
              <div className="vert-text">
                  <span>
                      Lamborghini <br/> Hurricane
                  </span>
              </div>
            </SwiperSlide>
          </Swiper>
    </div>
    
    </>);
  };

export default Lamborghini