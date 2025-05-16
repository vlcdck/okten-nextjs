import {FC} from "react";
import {IComment} from "@/models/IComment";

type CommentPropType = {
    comment: IComment
}

export const CommentComponent: FC<CommentPropType> = ({comment}) => {
    return (
        <div>

            {comment.id} {comment.name}

        </div>
    );
};