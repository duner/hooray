import React from 'react';

// require('./styles.scss');

const PostList = (props) => {
  return(
    <div className={'posts-list ' + (props.fetching? 'post-list--fetching' : '')}>
        <h2>This is a post list</h2>
        <div className={'posts-list--entries'}>
            {props.posts.map(post =>
              <p>post.postText</p>
            )}
        </div>
    </div>
  );
};

export default PostList;
