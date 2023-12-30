import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { vertexShader } from '../utils/vertex-shader'
import { fragmentShader } from '../utils/fragment-shader'

const Mesh = () => {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 2 }
    }
  }, [])

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      if (material) material.uniforms.u_time.value = 0.1 * clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={mesh} scale={[3, 3, 1]}>
      <sphereGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default Mesh
