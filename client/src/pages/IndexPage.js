import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage({ searchTerm }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <div className="flex flex-col ">
        <div classname="h-screen w-screen bg-support">
          <section className="dark:bg-support dark:text-primary">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-[#FFABAB]">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center  sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                      Button Text
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 rounded-2xl  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="object-contain h-80 sm:h-80 rounded-3xl  lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </div>
        {/* Page title starts */}
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-primary">
              Famous Recipies
            </h4>
          </div>
          <div className="mt-6 lg:mt-0">
            <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm">
              Back
            </button>
            <button className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Edit Profile
            </button>
          </div>
        </div>
        {/* Page title ends */}
        <div className="container mx-auto px-6">
          <div className="w-full h-64 rounded border-dashed border-2 border-gray-300">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div>
                  <div className="h-32 w-32 drop-shadow-md">
                    <img
                      src="https://res.cloudinary.com/dhybspk1v/image/upload/v1671397777/samples/food/pot-mussels.jpg"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                  <p>aloo fry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h1 className="text-primary text-4xl font-bold flex justify-center mt-10 lg:mt-24 lg:mb-5">
              RECIPIES
            </h1>
            <div className=" flex grid grid-cols-3">
              {posts.length > 0 &&
                posts
                  .filter((post) =>
                    post.title.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((post) => <Post {...post} />)}
            </div>
          </div>
        </div>
      </div>
      S
    </>
  );
}
