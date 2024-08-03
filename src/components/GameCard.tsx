import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from '../components/platformIconsList'
import CriticScore from './CriticScore'
interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
<Card>
    <Image src={game.background_image}/>
    <CardBody  borderRadius={10} overflow='hidden'>
        <Heading fontSize='2xl'>{game.name}</Heading>
       <HStack justifyContent='space-between'>
       <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
       <CriticScore score={game.metacritic}/>
       </HStack>
    </CardBody>
</Card>
  )
}

export default GameCard