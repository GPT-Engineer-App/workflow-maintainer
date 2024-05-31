import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Checkbox, Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [crewWorkflow, setCrewWorkflow] = useState([{ crew_name: "Dev Crew", output_name: "code", send_global_data_parameters: true }]);

  const [dataParameters, setDataParameters] = useState({
    requirements: "Create an API that can return 'Hello World'",
    more_data: "lala",
  });

  const handleCrewChange = (index, field, value) => {
    const newCrewWorkflow = [...crewWorkflow];
    newCrewWorkflow[index][field] = value;
    setCrewWorkflow(newCrewWorkflow);
  };

  const handleDataParametersChange = (field, value) => {
    setDataParameters({ ...dataParameters, [field]: value });
  };

  const addCrew = () => {
    setCrewWorkflow([...crewWorkflow, { crew_name: "", output_name: "", send_global_data_parameters: false }]);
  };

  const removeCrew = (index) => {
    const newCrewWorkflow = crewWorkflow.filter((_, i) => i !== index);
    setCrewWorkflow(newCrewWorkflow);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Crew Workflow
        </Text>
        {crewWorkflow.map((crew, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <HStack spacing={4} mb={4}>
              <FormControl>
                <FormLabel>Crew Name</FormLabel>
                <Input value={crew.crew_name} onChange={(e) => handleCrewChange(index, "crew_name", e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Output Name</FormLabel>
                <Input value={crew.output_name} onChange={(e) => handleCrewChange(index, "output_name", e.target.value)} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Send Global Data Parameters</FormLabel>
                <Checkbox isChecked={crew.send_global_data_parameters} onChange={(e) => handleCrewChange(index, "send_global_data_parameters", e.target.checked)} />
              </FormControl>
              <Button colorScheme="red" onClick={() => removeCrew(index)}>
                <FaTrash />
              </Button>
            </HStack>
          </Box>
        ))}
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addCrew}>
          Add Crew
        </Button>

        <Text fontSize="2xl" fontWeight="bold">
          Data Parameters
        </Text>
        <FormControl>
          <FormLabel>Requirements</FormLabel>
          <Textarea value={dataParameters.requirements} onChange={(e) => handleDataParametersChange("requirements", e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>More Data</FormLabel>
          <Textarea value={dataParameters.more_data} onChange={(e) => handleDataParametersChange("more_data", e.target.value)} />
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
