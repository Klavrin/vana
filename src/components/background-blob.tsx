import { Canvas } from '@react-three/fiber'
import Mesh from './mesh'

const BackgroundBlob = () => {
  return (
    <div className="w-screen h-screen -z-50 fixed blur-[10vw]">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Mesh />
      </Canvas>
    </div>
  )
}

export default BackgroundBlob
