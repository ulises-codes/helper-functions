# @ulises-codes/helper-functions

## Helper functions that I use all the time

**Reformat Phone Numbers**

    import { reformatTel, reformatOnBlur, reformatTelHref } from '@ulises-codes/helper-functions'

    // Reformats a US phone number string to (xxx) xxx-xxxx
    reformatTel(phoneNumber)

    // Reformats US phone number string on blur
    reformatTelOnBlur(e)

    // Reformats phone to <a> tag href format
    reformatTelHref(phoneNumber)

**Convert color string from hex to rgba**

    import { hexToRGBA } from '@ulises-codes/helper-functions'

    const rgbaColor = hexToRGBA(hexColor, opacity)
