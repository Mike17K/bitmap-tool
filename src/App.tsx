import { useState } from 'react'
import BitmapBoard from './components/BitmapBoard'

function App() {
  const [number, setNumber] = useState<bigint>(0n)
  const [representationOption, setRepresentationOption] = useState<number>(4)
  return <>
  <select value={representationOption} onChange={e => setRepresentationOption(Number(e.target.value))}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>

  <input type='number' value={number.toString()} onChange={e => setNumber(BigInt(e.target.value))} />
  <div className='bg-black'>
    <BitmapBoard
      title="Bitmap Board"
      representationOption={representationOption}
      number={number}
      className='w-[200px] h-[200px] m-auto'
      onChange={setNumber}
      />
  </div>
  </>
}

export default App
