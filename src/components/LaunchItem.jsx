// import { HiCalender } from "react-icons/hi"
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react"

export function LaunchItem(launch){
    return(
        <Box  bg="gray.100" p={4}>
            <Flex>
                <Text fontSize="2xl">
                    Mission <strong>{launch.mission_name}</strong>
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success": "Failure"}
                </Tag>
            </Flex>

            <Flex align="center">
                {/* <HiCalender /> */}
                <Text fontSize="sm" ml={1}>
                    {(launch.launch_date_local)}
                </Text>
            </Flex>
        </Box>
    )
}