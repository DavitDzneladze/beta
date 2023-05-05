import Router from "express";
import controller from "./controller.js";

const pathName = "/users";

const router = new Router();

router.use((req, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", process.env.REQ_PATH);
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
router.get(pathName, controller.getFullInfo);
router.post(pathName, controller.addUser);
router.delete(pathName, controller.deleteUser);
router.patch(pathName, controller.editUser);

export default router;
