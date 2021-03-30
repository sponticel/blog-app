import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { createPost } from '../../services/posts'

import Layout from '../../components/shared/Layout/Layout'

import './PostCreate.css'

const PostCreate = (props) => {

    const [post, setPost] = useState({
            name: '',
            description: '',
            imgURL: '',
            price: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost({
                ...post,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(post)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/posts`} />
    }
    return (
        <Layout user={props.user}>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-name"
                    placeholder='Name'
                    value={post.name}
                    name='name'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-price"
                    placeholder='Price'
                    value={post.price}
                    name='price'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-description"
                    rows={10}
                    placeholder='Description'
                    value={post.description}
                    name='description'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default PostCreate