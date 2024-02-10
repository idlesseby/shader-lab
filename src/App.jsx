import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Example from "./Examples/ColorTransition"

const App = () => {
  return (
    <Canvas camera={{position: [0,0,2] }}>
      <Example/>
      <color attach={"background"} args={['#000']}/>
      <OrbitControls/>
    </Canvas>
  )
}

export default App