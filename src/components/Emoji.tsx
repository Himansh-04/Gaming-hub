import { Image, ImageProps } from '@chakra-ui/react';
import bulleye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumsUp from '../assets/thumbs-up.webp'

interface Props{
    rating:number;
}

const Emoji = ({rating}:Props) => {
    if (rating<3) return null;

   const EmojiMap:{[key:number]:ImageProps}={
    3:{src:meh, alt:'meh',boxSize:'25px'},
    4:{src:thumsUp, alt:'recommended',boxSize:'25px'},
    5:{src:bulleye, alt:'exceptional',boxSize:'35px'},
    
    
}
  return (
   <Image {...EmojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji