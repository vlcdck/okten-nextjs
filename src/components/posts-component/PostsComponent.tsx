import {IPost} from "@/models/IPost";
import {getData} from "@/services/api.service";
import {PostComponent} from "@/components/post-component/PostComponent";
import Link from "next/link";

export const PostsComponent = async () => {

    const posts = await getData<IPost[]>('/posts')

    return (
        posts.map(post => <div key={post.id}>
            <Link href={{pathname: '/posts/' + post.id.toString(), query: {data: JSON.stringify(post)}}}>
                <PostComponent post={post}/>
            </Link>
        </div>)
    );
};