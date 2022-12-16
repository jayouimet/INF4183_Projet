import Image from 'next/image';
import img from "../../assets/uqo_logo_w.png";
import Member from './member';

export default function MembersList() {
    const members = [
        { "fullname": "Jeremie Ouimet", "email": "ouij01@uqo.ca", "phone": "450-123-1234" },
        { "fullname": "Francis Painchaud", "email": "paif01@uqo.ca", "phone": "450-123-1234" },
    ]

    return members.map(function (member) {
        return (
            <>
                <Member key={member.fullname} memberInfo={member} />
                <hr></hr>
            </>
        )
    });
}