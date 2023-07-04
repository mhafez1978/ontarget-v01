"use client";

import { useRef } from "react";

import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Center,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

const pages = [
  { pageId: 1, pageName: "home", pageUrl: "/" },
  { pageId: 2, pageName: "about", pageUrl: "/about" },
  { pageId: 3, pageName: "services", pageUrl: "/services" },
  { pageId: 4, pageName: "portfolio", pageUrl: "/portfolio" },
  { pageId: 5, pageName: "shop", pageUrl: "/shop" },
  { pageId: 6, pageName: "blog", pageUrl: "/blog" },
  { pageId: 7, pageName: "contact", pageUrl: "/contact" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        h={"64px"}
        position={"fixed"}
        zIndex={900}
      >
        <Flex pt={1} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"100vw"}
              pr={12}
              pl={8}
            >
              <Box>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/"
                >
                  OnTarget v1
                </Link>
              </Box>
              <Box
                alignItems={"center"}
                display={{ base: "none", md: "none", lg: "block" }}
                textTransform={"uppercase"}
                fontSize={16}
              >
                {pages.map((page) => (
                  <Link
                    key={page.pageId}
                    href={page.pageUrl}
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    fontWeight={"700"}
                  >
                    {page.pageName}
                  </Link>
                ))}
              </Box>

              <Box
                alignItems={"center"}
                display={{ base: "none", md: "none", lg: "block" }}
                textTransform={"uppercase"}
                fontSize={16}
              >
                <Button onClick={toggleColorMode} justifyItems={"center"}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/register"
                >
                  Register
                </Link>
              </Box>

              <Box display={{ base: "block", md: "block", lg: "none" }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    onClick={onOpen}
                    ref={btnRef}
                  />
                  <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>OnTarget</DrawerHeader>

                      <DrawerBody></DrawerBody>

                      <DrawerFooter>
                        <p>All rights reserved &copy; 2023</p>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
