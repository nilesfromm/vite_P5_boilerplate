import "./style.css";
import { MainClass } from "./mainClass";

window.onload = () => {
  new MainClass(document.getElementsByClassName("viewport")[0] as HTMLElement, 100, 100);
};
