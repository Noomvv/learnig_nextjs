import Post from '@/app/components/Post';

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

export async function generateStaticParams() {
  // Получаем список всех постов
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Возвращаем массив параметров
  return posts.map(post => ({
    id: post.id.toString(), // Преобразуем ID в строку
  }));
}

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await res.json();
  return result;
}

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id);

  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePost;