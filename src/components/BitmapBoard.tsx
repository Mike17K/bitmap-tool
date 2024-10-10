type BitmapBoardProps = {
    title?: string
    number: bigint
    representationOption: number
    className?: string;
    onChange: (number: bigint) => void
}

export default function BitmapBoard(props: BitmapBoardProps) {
  return (
    <>
        <h1>{props.title ?? 'Bitmap Board'}</h1>
         {/* 8x8 Bitmap Board */}
        <div
        className={props.className} 
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '1px',
            backgroundColor: 'black',
            padding: '1px',
        }}>
            {Array.from({ length: 64 }, (_, i) => {
                let index = null;
                switch (props.representationOption) {
                    case 1:
                        index = 63 - i;
                        break;
                    case 2:
                        index = i;
                        break;
                    case 3:
                        index = (i % 8) * 8 + Math.floor(i / 8);
                        break;
                    case 4:
                        index = 63 - (Math.floor(i / 8) * 8 + (7 - (i % 8)));
                        break;
                    default:
                        index = i;
                        break;
                }
                return (
                <button
                    key={i}
                    style={{
                        width: '100%',
                        paddingBottom: '100%',
                        backgroundColor: props.number & (1n << BigInt(index)) ? 'white' : 'black',
                    }}
                    onClick={() => {
                        props.onChange(props.number ^ (1n << BigInt(index)))
                    }}
                />
            )})}
        </div>
    </>
  )
}
