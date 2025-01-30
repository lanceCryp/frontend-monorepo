'use client'

import {
  Card,
  CardHeader,
  CardBody,
  VStack,
  HStack,
  Text,
  Heading,
  CardFooter,
  Button,
  Image,
  Box,
} from '@chakra-ui/react'
import { GqlChain } from '@repo/lib/shared/services/api/generated/graphql'
import { fNum } from '@repo/lib/shared/utils/numbers'
import { formatUnits } from 'viem'
import { useGetPendingReward } from '../hooks/useGetPendingReward'
import Countdown from 'react-countdown'
import { ReliquaryPosition } from '../reliquary.types'
import { useGetLevelInfo } from '../hooks/useGetLevelInfo'
import { relicGetMaturityProgress } from '../reliquary.helpers'
import { useState } from 'react'
import { LevelUpModal } from './LevelUpModal'
import { ClaimModal } from './ClaimModal'

const RELIC_LEVEL_NAMES = [
  'The Initiate',
  'The Neophyte',
  'The Wanderer',
  'The Rebel',
  'The Skeptic',
  'The Apprentice',
  'The Journeyman',
  'The Savant',
  'The Creator',
  'The Scholar',
  'The Awakened',
]

type RelicProps = {
  chain: GqlChain
  relic: ReliquaryPosition
}

export function Relic({ chain, relic }: RelicProps) {
  const [isModalOpen, setIsModalOpen] = useState('')
  const { amount } = useGetPendingReward(chain, relic.relicId)
  const { maturityThresholds } = useGetLevelInfo(chain, relic.poolId)

  const { levelUpDate, canUpgrade, canUpgradeTo } = relicGetMaturityProgress(
    relic,
    maturityThresholds || []
  )
  const levelName = RELIC_LEVEL_NAMES[relic.level]
  const level = relic.level + 1

  const isLevelUpModalOpen = isModalOpen === 'levelUp'
  const isClaimModalOpen = isModalOpen === 'claim'

  return (
    <>
      <Card
        bg="beets.base.800"
        border="1px solid"
        borderColor="beets.base.600"
        minH="400px"
        rounded="xl"
        w="33%"
      >
        <CardHeader>
          <HStack justify="space-between" w="full">
            <Heading size="md">
              Level {level} - {levelName}
            </Heading>
            <Heading size="md">Relic #{relic.relicId}</Heading>
          </HStack>
        </CardHeader>
        <CardBody>
          <VStack align="start">
            <HStack justify="space-between" w="full">
              <Text>Amount:</Text>
              <Text>{`${fNum('token', relic.amount)} fBEETS`}</Text>
            </HStack>
            <HStack justify="space-between" w="full">
              <Text>Pending rewards:</Text>
              <Text>{`${fNum('token', formatUnits(amount || 0n, 18))} BEETS`}</Text>
            </HStack>
            <HStack justify="space-between" w="full">
              <Text>Time to next level:</Text>
              <Box fontFamily="mono">
                {/* wrapped in monospace font for now to prevent jittering */}
                <Countdown date={levelUpDate} key={levelUpDate.getTime()} />
              </Box>
            </HStack>
            <Image alt={levelName} src={`/images/reliquary/${level}.png`} />
          </VStack>
        </CardBody>
        <CardFooter>
          <HStack justify="space-between" w="full">
            <Button disabled={!amount} onClick={() => setIsModalOpen('claim')}>
              Claim
            </Button>
            <Button disabled={!canUpgrade} onClick={() => setIsModalOpen('levelUp')}>
              Level up
            </Button>
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
          </HStack>
        </CardFooter>
      </Card>
      {isLevelUpModalOpen && (
        <LevelUpModal
          chain={chain}
          isOpen={isLevelUpModalOpen}
          nextLevel={canUpgradeTo}
          onClose={() => setIsModalOpen('')}
        />
      )}
      {isClaimModalOpen && (
        <ClaimModal chain={chain} isOpen={isClaimModalOpen} onClose={() => setIsModalOpen('')} />
      )}
    </>
  )
}
