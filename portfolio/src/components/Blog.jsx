// Blog.jsx


const Blog = () => {
  const posts = [
    {
      title: "My Journey from Pharmacy to Frontend Development",
      description: "My Story",
      link: "https://medium.com/@adabanyachristian21/my-journey-from-pharmacy-to-frontend-development-c4d1567679da",
    },
    {
      title: "React vs Angular",
      description: "Comparing Frontend Technologies: ReactJS vs. Angular",
      link: "https://medium.com/@adabanyachristian21/comparing-frontend-technologies-reactjs-vs-angular-f8a47566c35c",
    },
    // Add more posts as needed
  ];

  return (
    <section
      id="blog"
      className="py-10 px-5 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold text-center">Blog</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 ">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="mt-2">{post.description}</p>
            <a
              href={post.link}
              className="mt-4 text-blue-500 hover:underline"
              target="_blank"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
