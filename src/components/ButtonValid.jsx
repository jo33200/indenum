import { FaPaperPlane } from "react-icons/fa";

const Button =() => {
    return (
      <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center rounded-md bg-name-orange px-6 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPaperPlane className="mr-2" />
            Envoyer
          </button>
        </div>
    );
}

export default Button;