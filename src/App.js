import './App.css';
import './components/Main/Main.scss'
import styled from 'styled-components'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Earth } from './components/Main/Main'
import { MainLit } from './components/Main/MainLit'

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <CanvasContainer>
      <MainLit />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
