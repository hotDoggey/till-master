const debug = 0;
if (debug)
    console.log(
        "1. index.js from till_main_screen ran and \
default exported the 'router' defined in this module "
    );

import router from "./router";

export default {
    router,
};
