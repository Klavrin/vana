import { Canvas } from '@react-three/fiber'
import Mesh from './mesh'
import { useSelector } from 'react-redux'

const BackgroundBlob = () => {
  const color = useSelector((state: any) => state.blob.color)
  const sectionProgress = useSelector((state: any) => state.blob.sectionProgress)

  return (
    // <div id="blob" className="w-screen h-screen -z-50 fixed blur-[10vw] opacity-40">
    <div id="blob" className="w-screen h-screen -z-50 fixed blur-[10vw]">
      <Canvas>
        {/* <pointLight position={[10, 10, 10]} color="#fcba03" /> */}
        {/* <Mesh color="#995be5" opacity={1} /> */}
        <Mesh color={color} opacity={1} sectionProgress={sectionProgress} />
      </Canvas>
    </div>
  )
}

export default BackgroundBlob
