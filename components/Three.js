import { OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { motion } from 'framer-motion'

function Model() {

    const gltf = useLoader(GLTFLoader, '/model/scene.gltf')

    useEffect(() => {
        gltf.scene.scale.set(0.05, 0.05, 0.05)
        gltf.scene.position.set(0, -0.85, 0)
        gltf.scene.rotation.set(0.1, 0, 0)
    }, [gltf])

    useFrame(({ clock }) => {
        gltf.scene.rotation.y = clock.getElapsedTime() * 0.2
    })

    return <primitive object={gltf.scene} />
}

function Three({ transition }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ delay: 1, opacity: 1, transition: {transition} }} className='h-[700px] flex justify-between items-center relative'>
        <div className='w-[48%] ml-40'>
            <span className='text-5xl'>Bienvenue, je suis</span>
            <h1 className='text-8xl font-semibold mt-5 mb-10'>Antunes Benoit</h1>
            <div className='flex items-center animate-bounce'>
                <span className='text-2xl'>Scroll Down</span>
                <img className='h-10' src="https://www.pngmart.com/files/15/Arrow-PNG-Transparent-Image.png" alt="" />
            </div>
        </div>
        <div className='w-[62%] mr-20 h-[80%]'>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.6} />
                <Model />
            </Canvas>
        </div>
        <div className='flex overflow-hidden w-[100%] bottom-[-80px] absolute'>
                <span className='text-7xl font-thin txt'>PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO -</span>
                <span className='text-7xl font-thin txt'>PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO - PORTFOLIO&nbsp;</span>
        </div>
    </motion.div>
  )
}

export default Three