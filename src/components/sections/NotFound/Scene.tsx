import { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import styles from './NotFound.module.scss'
import matcap from './matcap.png'

const NotFound = () => {
  const $canvas = useRef<HTMLCanvasElement>(null)

  useIsomorphicLayoutEffect(() => {
    const canvas = $canvas.current
    if (!canvas) return

    const textureLoader = new THREE.TextureLoader()
    const texture1 = textureLoader.load(matcap.src, () => {
      // opacity: 0 in CSS
      if ($canvas.current) $canvas.current.style.opacity = '1'
    })

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x101010)

    // Object
    const geometry = new THREE.BoxGeometry(3, 1, 1)

    // Material
    const material = new THREE.MeshMatcapMaterial()
    material.matcap = texture1

    // Object 1
    const cube1 = new THREE.Mesh(geometry, material)

    // Object 2
    const cube2 = new THREE.Mesh(geometry, material)
    cube2.rotateY(Math.PI / 2) // rotate 90 deg

    // Group 1
    const group1 = new THREE.Group()
    group1.add(cube1)
    group1.add(cube2)
    group1.position.x = 2

    scene.add(group1)

    // Group 2
    const group2 = group1.clone()
    group2.position.x = -2

    scene.add(group2)

    // group 3
    const group3 = new THREE.Group()
    group3.add(group1, group2)

    scene.add(group3)

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    // camera.position.z = 4
    // camera.position.y = 6
    // camera.position.x = 2
    camera.position.z = 4
    camera.position.y = 6
    camera.position.x = 2
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas })

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const clock = new THREE.Clock()

    let raf: number

    // Animate
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update objects
      group3.rotation.y = 0.2 * elapsedTime

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      renderer?.dispose()
    }
  }, [])

  return <canvas className={styles.scene} ref={$canvas} />
}

export default NotFound
