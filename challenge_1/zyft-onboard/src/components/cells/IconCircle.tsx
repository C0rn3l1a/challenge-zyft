import marketActive from '../../assets/market-active.svg';
import marketInactive from '../../assets/market-inactive.svg';
import tagActive from '../../assets/tag-active.svg';
import tagInactive from '../../assets/tag-inactive.svg';
import logoActive from '../../assets/logo-active.svg';
import logoInactive from '../../assets/logo-inactive.svg';

interface IconCircleProps {
    active: boolean;
    icon: 'market'|'tag'|'logo';
}

const imageMap: {[key: string]: string} = {
    'market-active': marketActive,
    'market-inactive': marketInactive,
    'tag-active': tagActive,
    'tag-inactive': tagInactive,
    'logo-active': logoActive,
    'logo-inactive': logoInactive,
}

export function IconCircle(props: IconCircleProps) {
    const selected = `${props.icon}-${props.active ? 'active' : 'inactive'}`;

    return <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white" aria-label="Image">
        <img src={imageMap[selected]}/>
    </div>;
}
