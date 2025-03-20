import React, {Suspense,useState,useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [rotation, setRotation] = useState([0, 0, 0]);


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => [prev[0] + 0.04, prev[1] + 0.04, prev[2]]);
    }, 18); // Around 60 FPS

    return () => clearInterval(interval);
  }, []);
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75} roatation={rotation}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2*Math.PI,0,6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon})=>{
  return(
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas