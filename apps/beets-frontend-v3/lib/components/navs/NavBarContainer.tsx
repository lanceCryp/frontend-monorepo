'use client'

import { useNavData } from './useNavData'
import { NavBar, NavActions } from '@repo/lib/shared/components/navs/NavBar'
import { NavLogo } from './NavLogo'
import { MobileNav } from '@repo/lib/shared/components/navs/MobileNav'
import { useNav } from '@repo/lib/shared/components/navs/useNav'
import { BeetsLogoType } from '../imgs/BeetsLogoType'
import { LzBeetsMigrator } from '@repo/lib/shared/components/btns/LzBeetsMigrator'
import { Box, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeIn } from '@repo/lib/shared/utils/animations'
import { MaBeetsNavLink } from './MaBeetsNavLink'
import { SonicMigrationLink } from './SonicMigrationLink'
import Image from 'next/image'

export function NavBarContainer() {
  const { appLinks, ecosystemLinks, getSocialLinks } = useNavData()
  const { defaultAppLinks } = useNav()
  const allAppLinks = [...defaultAppLinks, ...appLinks]

  const mobileNav = (
    <MobileNav
      LogoType={BeetsLogoType}
      appLinks={allAppLinks}
      ecosystemLinks={ecosystemLinks}
      socialLinks={getSocialLinks()}
      customLinks={
        <>
          <MaBeetsNavLink fontSize="xl" />
          <SonicMigrationLink
            fontSize="xl"
            triggerEl={
              <HStack>
                <Box>Fantom migration</Box>
                <Image
                  alt="fantom"
                  height={24}
                  src="https://assets.coingecko.com/coins/images/4001/large/Fantom.png"
                  width={24}
                />
              </HStack>
            }
          />
        </>
      }
    />
  )

  return (
    <NavBar
      appLinks={allAppLinks}
      navLogo={<NavLogo />}
      rightSlot={
        <>
          <LzBeetsMigrator />
          <NavActions hideDarkModeToggle mobileNav={mobileNav} />
        </>
      }
      customLinks={
        <>
          <Box as={motion.div} variants={fadeIn}>
            <MaBeetsNavLink />
          </Box>
          <Box as={motion.div} variants={fadeIn}>
            <SonicMigrationLink />
          </Box>
        </>
      }
    />
  )
}
