import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { vertexShader } from '../utils/vertex-shader'
// import { fragmentShader } from '../utils/fragment-shader'

const MeshOrange = () => {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 2 }
    }),
    []
  )

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      if (material) material.uniforms.u_time.value = 0.1 * clock.getElapsedTime()
    }
  })

  const fragmentShader = `
  uniform float u_intensity;
  uniform float u_time;

  varying vec2 vUv;
  varying float vDisplacement;

  void main() {
      float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
      vec3 color = vec3(0.871,0.318,0.);
      gl_FragColor = vec4(color, 1.0);
  }
`

  return (
    <mesh ref={mesh} scale={[3, 3, 1]}>
      <sphereGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        // fragmentShader={fragmentShader('0.871,0.318,0.')}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default MeshOrange
