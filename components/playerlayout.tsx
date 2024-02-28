import { Box } from '@chakra-ui/layout'



const PlayerLayout = ({ children } :any) =>{
    return (
        <Box width={'100vw'} height={'100vh'}>
            <Box position={'absolute'} top={0} width={'250px'} left={0}>
                sideBar
            </Box>
            Layout
            <Box marginLeft={'250px'} marginBottom={'100px'}>
                Children
                {children}
            </Box>
            <Box position={'absolute'} left={0} bottom={0}>
                player
            </Box>
        </Box>
    )
};

export default PlayerLayout;