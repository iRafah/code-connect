import { AppLayout } from "../../layouts/App"
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'
import { useEffect, useState } from "react"

export const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:/blog-posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <AppLayout>
            <main className={styles.grid}>
                {posts.map(post => <CardPost key={post.slug} post={post} />)}
            </main>
        </AppLayout>
    )
}