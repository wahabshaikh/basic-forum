import { Comment, Post, User } from ".prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import { ChatAltIcon } from "@heroicons/react/solid";

const posts: (Post & { user: User })[] = [
  {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, incidunt dolores eligendi eos quos officia dicta totam neque sunt a, quam distinctio id tempore earum magni tempora modi et pariatur?",
    isAnonymous: false,
    userId: "1",
    user: {
      id: "1",
      username: "wahabshaikh",
      password: "abc",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, incidunt dolores eligendi eos quos officia dicta totam neque sunt a, quam distinctio id tempore earum magni tempora modi et pariatur?",
    isAnonymous: true,
    userId: "1",
    user: {
      id: "1",
      username: "wahabshaikh",
      password: "abc",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "3",
    createdAt: new Date(),
    updatedAt: new Date(),
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, incidunt dolores eligendi eos quos officia dicta totam neque sunt a, quam distinctio id tempore earum magni tempora modi et pariatur?",
    isAnonymous: false,
    userId: "2",
    user: {
      id: "2",
      username: "testuser",
      password: "abc",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, incidunt dolores eligendi eos quos officia dicta totam neque sunt a, quam distinctio id tempore earum magni tempora modi et pariatur?",
    isAnonymous: true,
    userId: "2",
    user: {
      id: "2",
      username: "testuser",
      password: "abc",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>App | Basic Forum</title>
      </Head>

      <aside className="max-w-3xl mx-auto p-4">
        <form action="#" className="relative">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="post" className="sr-only">
              Share your thoughts
            </label>
            <textarea
              rows={3}
              name="post"
              id="post"
              className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder="Share your thoughts..."
              defaultValue={""}
              required
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
            <div className="flex items-center">
              {/* Checkbox */}
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="is-anonymous"
                    aria-describedby="is-anonymous-description"
                    name="is-anonymous"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="is-anonymous"
                    className="font-medium text-gray-700"
                  >
                    Post anonymously
                  </label>
                  <p id="is-anonymous-description" className="text-gray-500">
                    Your username won&apos;t be displayed.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </aside>

      <main className="mt-4 max-w-3xl mx-auto px-4">
        <ul role="list" className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
            >
              <article aria-labelledby={"post-" + post.id}>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.isAnonymous ? "anonymous" : post.user.username}
                  </p>
                  <p className="text-sm text-gray-500">
                    <time dateTime={post.createdAt.toUTCString()}>
                      {post.createdAt.toUTCString()}
                    </time>
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-700 space-y-4">
                  {post.content}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium text-gray-900">0</span>
                      <span className="sr-only">replies</span>
                    </button>
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
