import Image from "next/image";
import { Navbar, Post } from "../../components";
import PostImage from "../../assets/neom-9hWJs7iblh8-unsplash.jpg";

export const dynamic = "force-dynamic";

const getPostList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Post list fetch failed");
  }

  return res.json();
};

const DashboardLayout = async ({ children }) => {
  const postList = await getPostList();

  return (
    <section className="flex flex-col gap-4">
      <Navbar />

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Popular post</h1>
        <Image src={PostImage} alt="Post image" />
        <Image
          src="https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Post post={postList[3]} />
      </div>

      {children}
    </section>
  );
};

export default DashboardLayout;
