import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {PostComponent} from "@/components/post-component/PostComponent";
import {IPost} from "@/models/IPost";

type Props = {
    searchParams: Promise<SearchParams>
}

const PostPage: FC<Props> = async ({searchParams}) => {

    const {data} = await searchParams;

    let obj = null;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IPost
    }

    return (
        <div>
            {
                obj && <PostComponent post={obj}/>
            }
        </div>
    );
};

export default PostPage;
