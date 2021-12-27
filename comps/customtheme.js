import { extendTheme, theme as base, withDefaultVariant } from '@chakra-ui/react'
const theme = extendTheme({
    fonts: {
        heading: ` Poppins , ${base.fonts?.heading}`,
        body: ` Lato, ${base.fonts?.body}`,
    }
},
    withDefaultVariant({
        variant: 'filled',
        components: ['Input']

    })
);
export default theme;