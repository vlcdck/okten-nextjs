import {FC} from "react";
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserPropType = {
    user: IUser
}

export const UserComponent: FC<UserPropType> = ({user}) => {
    return (
        <div>

            <Link href={{pathname: '/users/' + user.id.toString()}}>
                {user.id} - {user.name}
            </Link>
        </div>
    );
};