import { useEffect, useState } from 'react'
import BitmapBoard from './components/BitmapBoard'

function App() {
  const [number, setNumber] = useState<bigint>(0n)
  const [representationOption, setRepresentationOption] = useState<number>(4)
  const [base, setBase] = useState<number>(10)
  const [text, setText] = useState<string>('')

  useEffect(() => {
    try{   
      if (base === 10) {
        setNumber(BigInt(text))
      } else {
        setNumber(BigInt(`0x${text}`))
      }
      
    } catch (e) {
      console.error(e)
    }
  }
  , [text, base])

  useEffect(() => {
    setText(number.toString(base))
  }, [number])

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
  <select value={representationOption} onChange={e => setRepresentationOption(Number(e.target.value))}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>

  <input type='text' value={text} onChange={e => setText(e.target.value)} />
  
  {/* dropdown to select the representation option hex/base 10  */}
  <select value={base} onChange={e => setBase(Number(e.target.value))}>
    <option value={10}>Base 10</option>
    <option value={16}>Hex</option>
  </select>

  <div style={{
    width: '100%',
    maxWidth: '300px',
    margin: 'auto',
  }}>
    <BitmapBoard
      title="Bitmap Board"
      representationOption={representationOption}
      number={number}
      className='w-[200px] h-[200px] m-auto'
      onChange={setNumber}
      />
  </div>
  </div>
}

export default App
