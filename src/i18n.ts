/* eslint-disable @typescript-eslint/no-explicit-any */
import {getRequestConfig} from "next-intl/server"
 
export default getRequestConfig(async ({locale}) => {
    return {
        messages: (await import(`./utils/messages/${locale}.json`)).default
    }
})