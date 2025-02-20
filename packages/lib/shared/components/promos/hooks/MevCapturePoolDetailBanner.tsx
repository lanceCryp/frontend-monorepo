'use client'

import React from 'react'
import {
  Link,
  Stack,
  Button,
  Heading,
  Flex,
  Box,
  Center,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ArrowUpRight } from 'react-feather'
import { Picture } from '../../other/Picture'
import { HookIcon } from '@repo/lib/shared/components/icons/HookIcon'

export function MevCapturePoolDetailBanner() {
  const { colorMode } = useColorMode()

  return (
    <Box rounded="lg" shadow="2xl" w="full">
      <Box
        height={{ base: '100%', md: '132px' }}
        maxW="100%"
        overflow="hidden"
        position="relative"
        rounded="lg"
        shadow={
          colorMode === 'dark'
            ? '-2px -2px 4px 0px rgba(0, 0, 0, 0.65) inset, -4px -4px 8px 0px rgba(0, 0, 0, 0.65) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.08) inset, 4px 4px 8px 0px rgba(255, 255, 255, 0.20) inset, 2px 2px 4px 0px rgba(255, 255, 255, 0.08) inset'
            : '-2px -2px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px -4px 8px 0px rgba(0, 0, 0, 0.08) inset, 1px 1px 2px 0px rgba(255, 255, 255, 1) inset, 4px 4px 8px 0px rgba(255, 255, 255, 0.80) inset, 2px 2px 4px 0px rgba(255, 255, 255, 0.80) inset'
        }
        sx={{
          width: '100% !important',
          maxWidth: '100% !important',
        }}
        width="full"
      >
        <Box height="100%" position="absolute" width="100%" zIndex="-1">
          <Picture
            altText="MEV Capture background rock texture"
            defaultImgType="jpg"
            directory="/images/promos/mev-capture/"
            height="100%"
            imgAvif
            imgAvifDark
            imgJpg
            imgJpgDark
            imgName="bg"
            width="100%"
          />
        </Box>

        <Center className="copy" h="100%" zIndex="1">
          <Flex
            alignItems="space-between"
            borderRadius="xl"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'md', lg: 'md' }}
            justifyContent="space-between"
            p={{ base: 'md', md: 'lg' }}
            w="full"
            zIndex="1"
          >
            <Box>
              <Stack direction={{ base: 'column', md: 'row' }} gap="md">
                <Box rounded="full" shadow="2xl">
                  <Box rounded="full" shadow="md">
                    <Box
                      alignItems="center"
                      color={colorMode === 'dark' ? 'font.light' : 'brown.300'}
                      display="flex"
                      fontSize="xs"
                      fontWeight="normal"
                      h={14}
                      overflow="hidden"
                      rounded="full"
                      shadow={
                        colorMode === 'dark'
                          ? '-2px -2px 4px 0px rgba(0, 0, 0, 0.65) inset, -4px -4px 8px 0px rgba(0, 0, 0, 0.65) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.08) inset, 4px 4px 8px 0px rgba(255, 255, 255, 0.20) inset, 2px 2px 4px 0px rgba(255, 255, 255, 0.08) inset'
                          : '-2px -2px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px -4px 8px 0px rgba(0, 0, 0, 0.08) inset, 1px 1px 2px 0px rgba(255, 255, 255, 1) inset, 4px 4px 8px 0px rgba(255, 255, 255, 0.80) inset, 2px 2px 4px 0px rgba(255, 255, 255, 0.80) inset'
                      }
                      w={14}
                    >
                      <Box
                        h={14}
                        overflow="hidden"
                        position="absolute"
                        rounded="full"
                        w={14}
                        zIndex="-1"
                      >
                        <Picture
                          altText="MEV Capture background rock texture"
                          defaultImgType="jpg"
                          directory="/images/promos/mev-capture/"
                          height={14}
                          imgAvif
                          imgAvifDark
                          imgJpg
                          imgJpgDark
                          imgName="bg"
                          width={14}
                        />
                      </Box>
                      <Center h="full" w="full">
                        <HookIcon size={45} />
                      </Center>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading
                      color="font.maxContrast"
                      fontSize={{ base: '20px', md: '22px', lg: '24px' }}
                      fontWeight="bold"
                      letterSpacing="-0.7px"
                      lineHeight="1"
                      pb="sm"
                    >
                      MEV Capture Hook
                    </Heading>
                  </Box>
                  <Box>
                    <Text
                      color="font.maxContrast"
                      fontSize={{ base: 'md' }}
                      fontWeight="medium"
                      lineHeight="1.25"
                      maxW="600px"
                      opacity="0.8"
                    >
                      A novel mechanism for pools to capture and share MEV with LPs.
                      <Link
                        href="https://medium.com/balancer-protocol/mev-internalization-through-priority-fee-taxes-coming-to-balancer-v3-on-base-q1-2025-f20b3e1b7295"
                        pl="1"
                      >
                        Learn more
                        <Box as="span" display="inline-block" pl="0.5">
                          <ArrowUpRight size="14px" />
                        </Box>
                      </Link>
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Flex alignItems="center" gap="ms" maxW="284px">
              <Button
                _hover={{
                  bg: 'gradient.sandDark',
                  color: '#000',
                  borderColor: colorMode === 'dark' ? 'font.light' : 'font.light',
                }}
                as={NextLink}
                borderColor="font.maxContrast"
                color="font.maxContrast"
                cursor="hand"
                flex="1"
                gap="xs"
                h={{ base: '32px', sm: '40px', lg: '48px' }}
                href="https://medium.com/balancer-protocol/mev-internalization-through-priority-fee-taxes-coming-to-balancer-v3-on-base-q1-2025-f20b3e1b7295"
                py="sm"
                role="group"
                rounded="full"
                size="md"
                target="_blank"
                variant="outline"
                w="132px"
              >
                Learn more
                <Box
                  _groupHover={{
                    transform: 'translateX(2px)',
                  }}
                  as="span"
                  transition="transform 0.2s"
                >
                  <ArrowUpRight size="14px" />
                </Box>
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </Box>
  )
}
