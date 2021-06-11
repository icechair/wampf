import { runtime } from "./runtime/runtime.js";
import { MainProgram } from "./runtime/MainProgram.js";
import { Workbench } from "./workbench/main.js";

const rt = runtime(MainProgram(Workbench(), document.body));
rt.start();
