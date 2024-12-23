import React, { useState } from 'react'

import Thumbnail1 from '../assets/images/blog1.jpg'
import Thumbnail2 from '../assets/images/blog2.jpg'
import Thumbnail3 from '../assets/images/blog3.jpg'
import Thumbnail4 from '../assets/images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati aspernatur dolores quidem, ab nemo consequuntur unde sequi odit itaque aperiam. Eligendi hic dignissimos, reiciendis nulla a dolor accusantium numquam.',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'Welcome to Ghana.',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, aliquam dolores quas esse, perspiciatis odit facilis voluptatibus nihil cupiditate a dicta, repellat repudiandae illo enim alias harum eveniet accusamus accusantium.',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quos ea quas optio voluptatibus sapiente laudantium harum vitae repellendus! Magni et blanditiis id similique eos soluta tempore deserunt consequatur voluptate!',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, cumque quibusdam. Neque dolor sequi nihil, modi ut dicta laborum, eos dolores ullam quibusdam asperiores itaque accusantium quam nam aut voluptates.',
        authorID: 11
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className='posts'>
            <div className='container posts_container'>
                {
                    posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
                        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
                }
            </div>
        </section>
    )
}

export default Posts