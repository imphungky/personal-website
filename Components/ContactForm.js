

import {
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Box,
    Textarea,
    Text,
    Button
} from "@chakra-ui/react";

import {
    Formik,
    Form,
    Field
} from "formik";

export default function ContactForm() {

    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }

      function validateInput(value) {
          let error;
          if(!value) {
              error = 'Required'
          }
          return error;
      }

    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      }

    return (
        <Flex alignItems="center" color="white" w="95vw" h="90vh" justify="space-evenly">
            <Flex direction="column" maxW="40%">
                <Heading>
                    <Text size="xl">Thank you for checking out my website!</Text>
                    <br/>
                    <Text fontSize="18px">
                        If you want to contact me, you can email me at <Box as="span" color="blue.200">michael.phung@mail.utoronto.ca</Box> or optionally you can fill out the form to the right :)
                    </Text>
                </Heading>
            </Flex>
            <Flex direction="column"bg="gray.900" p="10" alignItems="flex-start" justify="center">
                <Formik
                    initialValues={{name: "", email: "", message: ""}}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: encode({"form-name": "contactform", ...values})
                        })
                        .then(() => {
                            actions.resetForm()
                        })
                        .catch(() => {
                            console.log("Error");
                        });
                        actions.setSubmitting(false)
                    }}
                    >
                    {(props) => (
                        <Form name="contactform">
                            <Flex direction="column" w="25vw">
                            <Flex>
                            <Field name="name" validate={validateInput}>
                                {({field, form}) => (
                                    <FormControl w="50%" mr="2" mb="2" isInvalid={form.errors.name && form.touched.name} >
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input {...field} id="name" placeholder="Name" />
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="email" validate={validateEmail}>
                                {({field, form}) => (
                                    <FormControl w="50%" ml="2" isInvalid={form.errors.email && form.touched.email} >
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input {...field} id="email" placeholder="Email" />
                                    </FormControl>
                                )}
                            </Field>
                            </Flex>
                            <Field name="message" validate={validateInput}>
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.message && form.touched.message}>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <Textarea {...field} id="message" />
                                    </FormControl>
                                )}
                            </Field>
                            <Button mt="2" colorScheme="blue" isLoading={props.isSubmitting} type="submit">Submit</Button>
                            </Flex>
                        </Form>
                    )}
                 </Formik>
            </Flex>
        </Flex>
    );
}