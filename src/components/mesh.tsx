import { useMemo, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { vertexShader } from '../utils/vertex-shader'
import { fragmentShader } from '../utils/fragment-shader'

const Mesh = ({
  color = '#ffffff',
  opacity = 1.0
}: {
  color?: string
  opacity?: number
}) => {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 2 },
      u_color: { value: new THREE.Color(color) },
      u_opacity: { value: opacity }
    }),
    []
  )

  useEffect(() => {
    uniforms.u_color.value.set(color)
    uniforms.u_opacity.value = opacity
  }, [color, opacity])

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      material.uniforms.u_time.value = 0.1 * clock.getElapsedTime()
    }
  })

  const fragmentShader = `
    uniform float u_intensity;
    uniform float u_time;
    uniform vec3 u_color;
    uniform float u_opacity;

    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
        float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
        vec3 color = u_color;
        gl_FragColor = vec4(color, u_opacity);
    }
  `

  return (
    <mesh ref={mesh} scale={[3, 3, 1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

export default Mesh
