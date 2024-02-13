"use client";

import { useState } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, isLoading] = useState(false);

  const submitComment = async (obj) => {
    const result = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return result;
  };

  const handleCommentSubmission = (e) => {
    e.preventDefault();
    isLoading(true);

    if (!comment || !name || !email) {
      setError(true);
      isLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    const commentsObj = { name, email, comment, slug };

    submitComment(commentsObj).then((res) => {
      console.log("res");
      if (res.ok) {
        setTimeout(() => {
          console.log("resok");
          setShowSuccessMessage(true);
          isLoading(false);
          setEmail("");
          setName("");
          setComment("");
        }, 2000);
      }
    });
  };

  return (
    <div className="py-3 lg:py-6 mx-auto w-full max-w-3xl border-t mb-10">
      <h3 className="font-abril text-2xl">Publier un commentaire</h3>

      <form
        className="flex gap-6 flex-col mt-5"
        onSubmit={handleCommentSubmission}
      >
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Prenom"
            required
            value={name}
            className="py-3 border rounded-md font-mulish text-base px-2 w-full"
          />
        </div>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            value={email}
            className="py-3 border rounded-md font-mulish text-base px-2 w-full"
          />
        </div>
        <div className="">
          <textarea
            className="py-3 border  rounded-md font-mulish px-2 w-full text-base"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Commentaires"
            value={comment}
            required
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        {error && (
          <div className="fixed bottom-5 w-full right-0 z-10">
            <p className="text-red-500 bg-red-100 p-8 rounded-md mx-5">
              Veuillez remplir tous les champs manquants
            </p>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="disabled:opacity-50 border items-center gap-3 border-black px-8 py-4 rounded-full text-center relative overflow-hidden mt-3 flex"
          >
            {loading ? (
              <div className="flex gap-3 items-center">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>en cours</span>
              </div>
            ) : showSuccessMessage ? (
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>C'est envoyé !</span>
              </div>
            ) : (
              "Envoyer"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
