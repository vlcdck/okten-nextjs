import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";
import {CommentComponent} from "@/components/comment-component/CommentComponent";

type Props = {
    searchParams: Promise<SearchParams>
}

const CommentPage: FC<Props> = async ({searchParams}) => {

    const {data} = await searchParams;

    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IComment
    }

    return (
        <div>
            {
                obj && <CommentComponent comment={obj}/>
            }
        </div>
    );
};

export default CommentPage;
