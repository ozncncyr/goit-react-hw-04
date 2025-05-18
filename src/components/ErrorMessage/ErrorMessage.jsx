import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={css.errorMessage}>
      <p>🚫🧠 {message}</p>
    </div>
  );
};

export default ErrorMessage;
