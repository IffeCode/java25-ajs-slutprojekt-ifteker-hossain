import {app} from './app';
import { todoRouter } from "./server/routes/todo.route";
import { pageRouter } from "./server/routes/page.route";


const PORT = 3000;


// app.use("/", pageRouter);
app.use("/todos", todoRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
