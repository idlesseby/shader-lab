import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Test from "./Test"

const App = () => {
  return (
    <Canvas>
      <Test/>
      <OrbitControls/>
    </Canvas>
  )
}

export default App