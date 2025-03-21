import { PoolList } from '@repo/lib/modules/pool/PoolList/PoolList'
import { DefaultPageContainer } from '@repo/lib/shared/components/containers/DefaultPageContainer'
import FadeInOnView from '@repo/lib/shared/components/containers/FadeInOnView'
import { Box, Skeleton } from '@chakra-ui/react'
import { PropsWithChildren, Suspense } from 'react'
// import { getApolloServerClient } from '@repo/lib/shared/services/api/apollo-server.client'
// import { GetFeaturedPoolsDocument } from '@repo/lib/shared/services/api/generated/graphql'
// import { FeaturedPools } from '@repo/lib/modules/featured-pools/FeaturedPools'

export async function PoolsPage({ children }: PropsWithChildren) {
  // Featured pools set up
  // const { supportedNetworks } = useProjectConfig()

  // const featuredPoolsQuery = await getApolloServerClient().query({
  //   query: GetFeaturedPoolsDocument,
  //   variables: { chains: supportedNetworks },
  //   context: {
  //     fetchOptions: {
  //       next: { revalidate: 300 }, // 5 minutes
  //     },
  //   },
  // })

  // const featuredPools = featuredPoolsQuery.data.featuredPools || []

  return (
    <>
      <Box>
        <DefaultPageContainer pb={['xl', '2xl']} pt={['xl', '40px']}>
          <FadeInOnView animateOnce={false}>
            <Box>
              {/* <BeetsPromoBanner /> */}
              {children}
            </Box>
          </FadeInOnView>
          {/* <FadeInOnView animateOnce={false}>
            <Box pt="20" pb="4">
              <FeaturedPools featuredPools={featuredPools} />
            </Box>
          </FadeInOnView> */}
        </DefaultPageContainer>
      </Box>
      <DefaultPageContainer noVerticalPadding pb={['xl', '2xl']} pt={['lg', '54px']}>
        <FadeInOnView animateOnce={false}>
          <Suspense fallback={<Skeleton h="500px" w="full" />}>
            <PoolList />
          </Suspense>
        </FadeInOnView>
      </DefaultPageContainer>
    </>
  )
}
