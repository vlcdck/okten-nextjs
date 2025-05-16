import {FC} from "react";
import {IPost} from "@/models/IPost";

type PostPropType = {
    post: IPost
}

export const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <div>
            {post.id} - {post.title}
        </div>
    );
};