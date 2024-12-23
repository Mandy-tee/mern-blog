import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail_container'>
        <div className='post-detail_header'>
          <PostAuthor />
          <div className='post-detail_buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className='post-detail_thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis esse ipsum dolore quidem amet corporis ipsa praesentium iure. Quo odio praesentium, assumenda ab nobis voluptatum iusto qui excepturi vitae quasi sit amet numquam quaerat, molestias animi eligendi labore officia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in inventore neque excepturi consequatur voluptas incidunt ipsam minima qui enim, quibusdam nesciunt eum consectetur voluptatum possimus, quidem, necessitatibus ratione fuga iusto harum. Eius aut assumenda suscipit dicta laudantium eligendi, dolorem iusto nobis iure quia repellendus odio laborum mollitia tempora cum modi sequi quas expedita. Cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, dolor! Hic quasi minima mollitia, molestiae temporibus quia voluptatum fugit obcaecati facilis repudiandae ullam saepe laborum, autem exercitationem perferendis quidem atque adipisci fuga similique nihil, possimus a? Iusto culpa dolores modi, voluptate optio, ipsa voluptatem aperiam itaque a illo facilis alias, repellendus praesentium velit fuga provident ea aspernatur in cumque fugiat tenetur dignissimos deleniti. Totam ducimus asperiores dolorum et error! Animi quas libero quaerat eligendi praesentium sunt dolorem similique placeat vel, rerum velit corporis delectus. Consequuntur saepe illo deleniti, laudantium iusto harum earum atque tenetur at nisi dicta. Aut deleniti consectetur error eius? Labore vel tempora eveniet neque, dolor libero reiciendis non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci blanditiis! Dolor in ullam rerum amet placeat provident quo unde?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, debitis accusamus nostrum tenetur eaque modi dolorem, earum iste, corporis quasi quisquam unde assumenda veritatis pariatur ipsa vitae ut neque labore corrupti quibusdam odit hic repellat magnam! Suscipit quia nostrum corrupti deserunt quaerat beatae sit, nulla iure aut magni velit praesentium culpa possimus non, aliquid officiis minima. Commodi magni officia tempora animi quibusdam veniam. Vel provident, ipsum saepe earum hic eos blanditiis sint est aliquid aliquam asperiores omnis dolore repudiandae recusandae odit consequuntur, sequi ad pariatur quibusdam aperiam vitae quisquam sunt magni. Ex maiores iste quo amet, commodi ad consequatur! Consectetur, eligendi excepturi porro explicabo fuga soluta possimus fugiat quos, numquam corporis mollitia libero unde eveniet voluptatibus voluptate ad deleniti esse hic iusto error necessitatibus a. Laudantium repudiandae enim commodi maiores blanditiis reiciendis ducimus ipsa beatae modi ullam ab cum illum aspernatur natus repellat nobis eaque unde voluptas, officia temporibus dolorem! Repellendus quos at sunt obcaecati veniam quibusdam, alias nesciunt sequi ea, quo vel. Iste dolorum esse tenetur corrupti nobis eum aliquid, sunt earum expedita dolores voluptatem sequi obcaecati reiciendis suscipit itaque ullam optio. Corrupti quas, quam illum architecto assumenda aliquid? At impedit porro dolor, quia ea laudantium expedita minima facere.
        </p>
      </div>
    </section>
  )
}

export default PostDetail
