// Taking this code out of the main.js file to declutter it.
// To revert back simply transfer everything except the export line "export { FontAwesomeIcon };"
// back to main.js

import { library } from "@fortawesome/fontawesome-svg-core"; // FontAwesome core
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; /* FontAwesome component */
import {
    faCarBurst,
    faCarOn,
    faUserCog,
    faUserSecret,
    faListOl,
    faMoneyBill1Wave,
    faCirclePlus,
    faUser,
    faTrash,
    faSackDollar,
    faHashtag,
} from "@fortawesome/free-solid-svg-icons"; /* FontAwesome import individual icons */
// import { fas } from '@fortawesome/free-solid-svg-icons' /* FontAwesome import all icons */

library.add(
    faCarOn,
    faCarBurst,
    faListOl,
    faMoneyBill1Wave,
    faCirclePlus,
    faUser,
    faTrash,
    faSackDollar,
    faHashtag
); /* add individual icons to the library */

export { FontAwesomeIcon };
