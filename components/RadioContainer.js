import { Flex, Spacer, Box, Radio, Divider } from "native-base"

export const RadioContainer = ({name,buttonValue}) => {
    return (
        <>
            <Flex direction='row' justifyContent='space-between' alignItems='center' paddingX='2'>
                <Box>{name}</Box>
                <Spacer />
                <Radio.Group accessibilityLabel='gender-selection'>
                    <Radio value={buttonValue}></Radio>
                </Radio.Group>
            </Flex>
            <Divider my="4" _light={{
                bg: "muted.800"
            }} _dark={{
                bg: "muted.50"
            }} />
        </>
    )
}
