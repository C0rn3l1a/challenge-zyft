import step1 from '../../assets/instrucitons-step-1.svg';
import step2 from '../../assets/instrucitons-step-2.svg';

interface InstructionImageProps {
    step: number;
}

export function InstructionImage(props: InstructionImageProps) {
    return <>
        <img src={ props.step === 2 ? step2 : step1 } className="w-full"/>
    </>
}
