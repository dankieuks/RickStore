import brandRouter from "./brandRouter.js";
import cartRouter from "./cartRouter.js";
import commentRouter from "./commentRouter.js";
import productRouter from "./producRouter.js";
import userRouter from "./userRouter.js";

const initRout=(app) => {
    app.use("api/user", userRouter);
    app.use("api/product", productRouter);
    app.use("api/brand", brandRouter);
    app.use("api/comments", commentRouter);
    app.use("api/cart",cartRouter);
  
    
}
export default initRout;
