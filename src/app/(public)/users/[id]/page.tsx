import {FC} from "react";
import {getDataById} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import {UserComponent} from "@/components/user-component/UserComponent";

type Prop = {
    params: Promise<{ id: string }>
}

const UserPage: FC<Prop> = async ({params}) => {

    const {id} = await params;

    const user = await getDataById<IUser>('/users', id)

    return (
        <div>
            <UserComponent user={user}/>
        </div>
    );
};

export default UserPage;
