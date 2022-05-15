import { OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { motion } from 'framer-motion'

function Model() {

    const gltf = useLoader(GLTFLoader, '/model/scene.gltf')

    useEffect(() => {
        gltf.scene.scale.set(1.2, 1.2, 1.2)
        gltf.scene.position.set(0, -0.9, 0)
        gltf.scene.rotation.set(0.1, 0, 0)
    }, [gltf])

    useFrame(({ clock }) => {
        gltf.scene.rotation.y = clock.getElapsedTime() * 0.2
    })

    return <primitive object={gltf.scene} />
}

function Three({ transition }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ delay: 1, opacity: 1, transition: {transition} }} className='sm:h-[700px] sm:flex sm:justify-between sm:items-center relative'>
        <div className='sm:w-[48%] ml-0 sm:ml-40 text-center sm:text-left mt-10 sm:mt-0'>
            <span className='text-3xl sm:text-5xl'>Bienvenue, je suis</span>
            <h1 className='text-5xl sm:text-8xl font-semibold mt-5 mb-10'>Antunes Benoit</h1>
            <div className='flex justify-center items-center sm:justify-start animate-bounce text-center'>
                <span className='text-xl sm:text-2xl'>Scroll Down</span>
                <img className='h-8 sm:h-10' src="https://www.pngmart.com/files/15/Arrow-PNG-Transparent-Image.png" alt="" />
            </div>
        </div>
        <div className='sm:w-[62%] mt-10 sm:mt-0 mx-5 sm:mr-20 h-[200px] sm:h-[80%]'>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1} />
                <pointLight intensity={1} position={[1, 1, 1]} />
                <Model />
            </Canvas>
        </div>
        <div className='flex overflow-hidden w-[100%] bottom-[-80px] sm:bottom-[-80px] absolute'>
                <span className='text-4xl sm:text-7xl font-thin txt'>PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO -</span>
                <span className='text-4xl sm:text-7xl font-thin txt'>PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO&nbsp;</span>
        </div>
    </motion.div>
  )
}

export default Three