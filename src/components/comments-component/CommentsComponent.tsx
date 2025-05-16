import {getData} from "@/services/api.service";
import {IComment} from "@/models/IComment";
import {CommentComponent} from "@/components/comment-component/CommentComponent";
import Link from "next/link";

export const CommentsComponent = async () => {

    const comments = await getData<IComment[]>('/comments')

    //
//
    return (
        comments.map(comment => <div key={comment.id}>
            <Link href={{pathname: '/comments/' + comment.id.toString(), query: {data: JSON.stringify(comment)}}}>
                <CommentComponent comment={comment}/>
            </Link>
        </div>)
    );
};