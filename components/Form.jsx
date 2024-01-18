import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with AI-Powered platform.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl gap-7 glassmorphism flex flex-col mb-4"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-slate-700 text-base">
            Your AI Prompt
          </span>
          <textarea
            id="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            placeholder="Write your prompt here..."
            className="form_textarea"
          ></textarea>
        </label>
        <label
          htmlFor="tag"
          className="font-satoshi font-semibold text-slate-700 text-base"
        >
          Tag{" "}
          <span className="font-normal">
            (#idea, #webdevelopment, #uidesign)
          </span>
          <input
            type="text"
            id="tag"
            placeholder="#tag"
            autoComplete="off"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-slate-700 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2 text-sm rounded-full text-white bg-primary-orange transition-colors duration-200 hover:bg-orange-400"
            disabled={submitting}
          >
            {submitting ? "Creating..." : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
