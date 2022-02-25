import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export const featureUnavailable = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800 flex items-center`}
      role="alert"
    >
      <span>Ta funkcja nie jest jeszcze dostępna.</span>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="p-2 appearance-none"
      >
        <IoClose color="currentColor" />
      </button>
    </div>
  ));
