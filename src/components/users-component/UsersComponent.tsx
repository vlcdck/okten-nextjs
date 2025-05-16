import {getData} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import {UserComponent} from "@/components/user-component/UserComponent";

export const UsersComponent = async () => {

    const users = await getData<IUser[]>('/users')

    return (
        users.map(user => <UserComponent key={user.id} user={user}/>)
    );
};