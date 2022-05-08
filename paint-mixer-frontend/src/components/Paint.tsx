import { PaintRecord } from '../types';

type PaintProps = {
  paint?: PaintRecord;
  onPaintClick: (paint: PaintRecord) => void;
};
export default function Paint(props: PaintProps) {
  const { paint, onPaintClick } = props;
  if (!paint) {
    return <> </>;
  }
  const { name, colourjs, hexCode } = paint;
  const style = {
    backgroundColor: hexCode,
  };

  return (
    <li
      className="paint max-w-sm p-2 shadow-lg rounded-md border-2 border-black"
      style={style}
      onClick={(e) => onPaintClick(paint)}
      onKeyDown={(e) => onPaintClick(paint)}
      role="presentation"
    >
      <div className="p-1 rounded-md border border-gray-400 bg-white">
        <div className="text-lg">{name}</div>
        {/* <div className="text-sm">{style.backgroundColor}</div> */}
      </div>
    </li>
  );
}
