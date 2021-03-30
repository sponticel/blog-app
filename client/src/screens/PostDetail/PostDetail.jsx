import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getPost, deletePost } from '../../services/posts'

import Layout from '../../components/shared/Layout/Layout'

import './PostDetail.css'

const PostDetail = (props) => {

    const [post, setPost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            setPost(post)
            setLoaded(true)
        }
        fetchPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className="post-detail">
                <img className="post-detail-image" src={post.imgURL} alt={post.name} />
                <div className="detail">
                    <div className="name">{post.name}</div>
                    <div className="price">{`$${post.price}`}</div>
                    <div className="description">{post.description}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deleteProduct(post._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostDetail