interface Props {
  number: Number;
  onEnd(): void;
}

export default function Numeric(props: Props) {
  const obj = new SpeechSynthesisUtterance(String(props.number));

  obj.lang = 'en-US';
  obj.onend = props.onEnd;
  obj.onerror = props.onEnd;

  speechSynthesis.speak(obj);

  return null;
}
