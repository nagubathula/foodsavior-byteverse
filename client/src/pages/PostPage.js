import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page my-24 overflow-y-clip">
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

      <h1 className="px-2 py-1 text-3xl flex font-bold justify-center rounded-full  mb-10 dark:text-primary">
        EDIT ME
      </h1>
      <div class="container drop-shadow-[0_99px_90px_rgba(207,77,114,0.5] grid grid-cols-12 mx-auto rounded-xl bg-primary  bg-opacity-60 backdrop-blur-sm">
        <div class="bg-no-repeat bg-cover  dark:bg-secondary col-span-full lg:col-span-4">
          <div className="image">
            <img
              src={`http://localhost:4000/${postInfo.cover}`}
              alt=""
              className="h-80 "
            />
          </div>
        </div>
        <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <div class="flex justify-start">
            <span class="px-2 py-1 my-3 text-xs rounded-full dark:bg-primary dark:text-support">
              Label
            </span>
          </div>
          <h1 class="text-3xl font-semibold text-support">{postInfo.title}</h1>

          <div
            className="content flex-1 pt-2"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />

          <div className="my-8  text-primary">
            <button className="bg-support flex flex-row  rounded-full py-2 px-3 hover:bg-tertiary">
              <Link  to={`/edit/${postInfo._id}`}>
              <span>
                {" "}
                {userInfo.id === postInfo.author._id && (
                  <div >
                    
                      Edit this post
                    
                  </div>
                )}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              </Link>
            </button>
            
          </div>
          <div class="flex items-center justify-between pt-2">
            <div class="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 dark:text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="self-center text-sm text-white">
                by @{postInfo.author.username}
              </span>
            </div>
            <span class="text-xs  text-white">
              <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </span>
          </div>
        </div>
      </div>

      {/* <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
        </div>
      )}
      <div className="image">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          alt=""
          className="h-72"
        />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      /> */}
    </div>
  );
}
