import React from 'react'; 
import BlogCard from './components/BlogCard/BlogCard';
import Blog from './components/Blog/Blog';
import './index.css';

//create a todo list
class App extends React.Component {
  render() {
    const blogPosts = [
      { 
        imageSource: "https://rickstylz01.github.io/images/rick_diamond.png?raw=true",
        title: "Initial Post",
        description: "Lorum Ipsum",
      },
      {
        imageSource: "https://rickstylz01.github.io/images/rick_diamond.png?raw=true",
        title: "New different Post",
        description: "different thing",
      }
    ];


    return (
      <div className="App">
        <Blog />
        {blogPosts.map((blogPost, index) => (
          <BlogCard
            imageSource={blogPost.imageSource}
            title={blogPost.title}
            description={blogPost.description} />
        ))}
      </div>

    ) 
  }
}


export default App;
