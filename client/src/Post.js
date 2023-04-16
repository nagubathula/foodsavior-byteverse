import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  category,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      {/* <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div> */}
      <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto my-3 ">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + cover} alt=""  className="h-64 mx-auto"/>
          </Link>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2 text-primary">
            <Link to={`/post/${_id}`}>
              <h2>{title}</h2>
            </Link>
          </div>
          <p class="text-gray-700 text-base">{summary}</p>
        </div>

        <div class="text-right pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{category}
          </span>
          
        </div>
        <div className="text-sm text-right mr-2 my-2 text-primary">
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
        </div>
      </div>
      {/* <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div> */}
    </div>
  );
}
