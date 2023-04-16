import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("category", category);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form onSubmit={createNewPost}>
      <div class="absolute  inset-0 h-screen overflow-hidden bg-white">
        <svg
          class="absolute  opacity-50 top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="100%" y="-1">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="space-y-12 mx-24 my-10 bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-[0_99px_90px_rgba(207,77,114,0.35)]">
        <div className="border py-10 px-24 border-primary pb-12">
          <h2 className=" text-3xl text-primary font-semibold leading-7 ">
            CREATE POST
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="flex flex-row gap-24">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-xl  border border-primary mb-2  sm:max-w-md">
                    <div>
                      <input
                        type="title"
                        placeholder={"Title"}
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Summary
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md mb-2  border border-primary sm:max-w-md">
                    <div>
                      <textarea
                        type="summary"
                        placeholder={"Summary"}
                        rows="3"
                        cols="50"
                        value={summary}
                        onChange={(ev) => setSummary(ev.target.value)}
                        autoComplete="Summary"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Category
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md mb-2  border border-primary sm:max-w-md">
                    <div>
                      <input
                        type="category"
                        placeholder={"Category"}
                        value={category}
                        onChange={(ev) => setCategory(ev.target.value)}
                        autoComplete="Category"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-primary"
              >
                About
              </label>
              <Editor onChange={setContent} value={content} />

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about your receipe.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-primary"
              >
                Recepie Picture
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-primary/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-primary"
                    >
                      <input
                        type="file"
                        onChange={(ev) => setFiles(ev.target.files)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Create post
            </button>
          </div>
        </div>
      </div>
      {/* <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="category"
        placeholder={"Category"}
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: "5px" }}>Create post</button> */}
    </form>
  );
}
