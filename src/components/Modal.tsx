
const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-2 right-2">
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <p className="mb-4">{project.description}</p>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Demo
          </a>
        </div>
      </div>
    );
  };

export default Modal;