import { PoolCore } from '@repo/lib/modules/pool/pool.types'
import { HStack, Text } from '@chakra-ui/react'
import { PoolVersionTag } from '@repo/lib/modules/pool/PoolList/PoolListTable/PoolVersionTag'
import { isBoosted } from '@repo/lib/modules/pool/pool.helpers'
import { getPoolTypeLabel } from '@repo/lib/modules/pool/pool.utils'
import Image from 'next/image'
import { PoolHookTag } from '@repo/lib/modules/pool/PoolDetail/PoolHookTag'
import { usePoolsMetadata } from '../../metadata/PoolsMetadataProvider'

interface Props {
  pool: PoolCore
}

export function PoolListTableDetailsCell({ pool }: Props) {
  const { getErc4626Metadata } = usePoolsMetadata()

  const erc4626Metadata = getErc4626Metadata(pool)

  return (
    <HStack>
      <PoolVersionTag isSmall pool={pool} />
      <Text fontWeight="medium" textAlign="left" textTransform="capitalize">
        {isBoosted(pool) ? 'Boosted' : getPoolTypeLabel(pool.type)}
      </Text>
      <HStack gap="0.375rem">
        {erc4626Metadata.map(metadata => (
          <Image
            alt={metadata.name}
            height={20}
            key={metadata.name}
            src={metadata.iconUrl || ''}
            width={20}
          />
        ))}
        <PoolHookTag onlyShowIcon pool={pool} />
      </HStack>
    </HStack>
  )
}
