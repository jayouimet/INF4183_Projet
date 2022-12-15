import Image  from 'next/image';
import img from "../../assets/uqo_logo_w.png";
import Member from './member';

export default function MembersList() {
    return (
        <Member memberInfo={1} />
    );
}