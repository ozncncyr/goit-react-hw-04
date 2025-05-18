import { PuffLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <PuffLoader color="crimson" size={80} />
  </div>
);

export default Loader;
