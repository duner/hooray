import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CreatePostForm from '../../components/CreatePostForm';
import PostList from '../../components/PostList';

import {
  fetchPosts,
  createPost,
} from './actions';

class PostsPage extends React.Component {

    componentWillMount() {
      this.props.fetchPosts();
    }

    render() {
        let { vm } = this.props;

        return(
            <div className="post-page--root">
                <h1>Hooray</h1>
                <CreatePostForm
                  createPost={this.props.createPost}
                />

                <PostList
                    posts={vm.posts.entries}
                    fetching={vm.posts.fetching}
                />
            </div>
        )
    };
}

PostsPage.propTypes = {
  vm: PropTypes.object.isRequired
};

const mapStateToProps = ({ postsReducer }) => {
  return {
    vm: postsReducer
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (query) => { dispatch(fetchPosts(query)) },
        createPost: (query) => { dispatch(createPost(query)) },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
