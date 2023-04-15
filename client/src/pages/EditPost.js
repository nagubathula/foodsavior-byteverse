import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setCategory(postInfo.category);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("category", category);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <main>
      <div className="mx-auto align-middle max-w-7xl py-6 sm:px-6 lg:px-8">
        <form className="align-middle max-w-7xl" onSubmit={updatePost}>
          <div className="mt-16 flex flex-col xl:w-2/6 lg:w-2/3 md:w-2/3 w-full">
            <label
              htmlFor="title"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Title
            </label>
            <input
              type="title"
              placeholder={"Title"}
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            />
          </div>

          <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
            <label
              htmlFor="description"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Description
            </label>
            <input
              type="summary"
              className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder={"Summary"}
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
              rows={5}
            />
            <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
              Character Limit: 200
            </p>
          </div>
          <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
            <label
              htmlFor="description"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Category
            </label>
            <input
              type="category"
              className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder={"Category"}
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
              rows={5}
            />
            <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
              Character Limit: 200
            </p>
          </div>
          <br />
          <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
          <label
              htmlFor="description"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Insert Image
            </label>
          <input
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            type="file"
            onChange={(ev) => setFiles(ev.target.files)}
          />
          </div>
          <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
          <label
              htmlFor="description"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Edit Content
            </label>
            <Editor onChange={setContent} value={content} />
            </div>
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ marginTop: "5px" }}
          >
            Update post
          </button>
        </form>
      </div>
    </main>
  );
}
